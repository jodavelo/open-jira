import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = 
    | { message: string }
    | IEntry

    
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    if( !mongoose.isValidObjectId( id ) ){
        return res.status(400).json({message: 'El id no es valido'});
    }

    switch ( req.method ) {
        case 'GET':
            return getEntryById( req, res );
        case 'PUT':
            return updateEntry( req, res );
        default:
            return res.status(400).json({ message: 'Método no existe' });
    }
}

const getEntryById = async( req: NextApiRequest, res: NextApiResponse ) => {
    const { id } = req.query;
    await db.connect();
    const entryToFind = await Entry.findById( id );
    console.log( entryToFind )
    if( !entryToFind ){
        await db.disconnect();
        return res.status( 404 ).json({ message: 'No se encontro resultados' });
    }
    try {
        await db.disconnect();
        res.status(200).json( entryToFind );
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message })
    }
}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    const { id } = req.query;
    await db.connect();
    const entryToUpdate = await Entry.findById( id );
    if( !entryToUpdate ) {
        await db.disconnect();
        return res.status(400).json({ message: 'No hay entradas con ese ID' });
    }

    const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;
    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } );
        await db.disconnect();
        res.status(200).json( updatedEntry! );        
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message });
    }

    // entryToUpdate.description = description;
    // entryToUpdate.status = status;
    // await entryToUpdate.save();

}