import { RouteModel } from '../models/RouteModel';

export const routeData: RouteModel[] = [
    {
        lat: 51.521585,
        lng: -0.017371,
        location: 'London',
        title: 'Start of the journey, our bags are packed!',
        length: 1,
        hideFromBounding: true,
    },
    {
        lat: 21.161907,
        lng: -86.851524,
        location: 'Cancun',
        title: 'Day one of the journey',
        length: 1,
    },
    {
        lat: 17.477763,
        lng: -88.255911,
        location: 'Belize',
        title: 'Our first day in Belize',
        length: 3,
    },
    {
        lat: 14.580053,
        lng: -90.490899,
        location: 'Guatemala',
        title: 'Our first day in Guatemala',
        length: 3,
    },
    {
        lat: 14.073249,
        lng: -87.166326,
        location: 'Honduras',
        title: 'Our first day in Honduras',
        length: 3,
    },
    {
        lat: 12.291366,
        lng: -83.842397,
        location: 'Nicaragua',
        title: 'Our first day in Nicaragua',
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