import { RouteModel } from '../models/route';

export const routeData: RouteModel[] = [
    {
        id: 1,
        lat: 21.161907,
        lng: -86.851524,
        location: 'Cancun',
        title: 'Day one of the journey',
        length: 1,
    },
    {
        id: 2,
        lat: 17.477763,
        lng: -88.255911,
        location: 'Belize',
        title: 'Our first day in Belize',
        length: 3,
    }
    ,
    {
        id: 3,
        lat: 14.580053,
        lng: -90.490899,
        location: 'Guatemala',
        title: 'Our first day in Guatemala',
        length: 3,
    }
];

const photoData = [
    {
        id: 1,
        routeId: 1,
        photos: [
            {
                src: 'https://i.dailymail.co.uk/i/pix/2014/06/24/article-2667126-1F1486F800000578-967_634x417.jpg',
                title: 'Wow look at the sky!!',
                
            }
        ]
    }
]