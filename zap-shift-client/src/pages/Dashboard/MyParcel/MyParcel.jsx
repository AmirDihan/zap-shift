import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const MyParcel = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data : parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2>ALL my parcels : {parcels.length}</h2>
        </div>
    );
};

export default MyParcel;