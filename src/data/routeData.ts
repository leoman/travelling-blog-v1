import moment from 'moment';
import { RouteModel } from '../models/RouteModel';

export const routeData: RouteModel[] = [
    {
        slug: 'start-of-the-journey',
        lat: 51.521585,
        lng: -0.017371,
        location: 'London',
        title: 'Start of the journey, our bags are packed!',
        length: 1,
        photo: 'photo-6.jpg',
        date: new Date(moment().subtract(10, 'days').format()),
        hideFromBounding: true,
        post: {
            titleColour: '#000000'
        }
    },
    {
        slug: 'day-one-of-the-journey',
        lat: 21.161907,
        lng: -86.851524,
        location: 'Cancun',
        title: 'Day one of the journey',
        photo: 'photo-5.jpg',
        date: new Date(moment().subtract(9, 'days').format()),
        length: 1,
        post: {
            titleColour: '#000000'
        }
    },
    {
        slug: 'our-first-day-in-belize',
        lat: 17.477763,
        lng: -88.255911,
        location: 'Belize',
        title: 'Our first day in Belize',
        photo: 'photo-4.jpg',
        date: new Date(moment().subtract(7, 'days').format()),
        length: 3,
        post: {
            titleColour: '#000000'
        }
    },
    {
        slug: 'our-first-day-in-guatemala',
        lat: 14.580053,
        lng: -90.490899,
        location: 'Guatemala',
        title: 'Our first day in Guatemala',
        photo: 'photo-3.jpg',
        date: new Date(moment().subtract(5, 'days').format()),
        length: 3,
        post: {
            titleColour: '#FFFFFF'
        }
    },
    {
        slug: 'our-first-day-in-honduras',
        lat: 14.073249,
        lng: -87.166326,
        location: 'Honduras',
        title: 'Our first day in Honduras',
        photo: 'photo-2.jpg',
        date: new Date(moment().subtract(2, 'days').format()),
        length: 3,
        post: {
            titleColour: '#FFFFFF'
        }
    },
    {
        slug: 'our-first-day-in-nicaragua',
        lat: 12.291366,
        lng: -83.842397,
        location: 'Nicaragua',
        title: 'Our first day in Nicaragua',
        photo: 'photo-1.jpg',
        date: new Date(),
        length: 3,
        post: {
            titleColour: '#000000'
        }
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