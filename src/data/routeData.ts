import { RouteModel } from '../models/route';

const routeData: RouteModel[] = [
    {
        id: 1,
        lat: 1,
        lng: 2,
        location: 'Cancun',
        title: 'Day one of the journey',
        length: 1,
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