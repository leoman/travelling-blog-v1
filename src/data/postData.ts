import moment from 'moment';
import { PostModel } from '../models/PostModel';

export const postData: PostModel[] = [
    {
        id: 1,
        title: 'Start of the journey, our bags are packed!',
        slug: 'start-of-the-journey',
        titleColour: '#000000',
        content: '',
        date: new Date(moment().subtract(10, 'days').format()),
        photo: 'photo-6.jpg',
        location: {
            location: 'London',
            lat: 51.521585,
            lng: -0.017371,
            duration: 1,
            hideFromBounding: true,
        }
    },
    {
        id: 2,
        title: 'Day one of the journey',
        slug: 'day-one-of-the-journey',
        titleColour: '#000000',
        photo: 'photo-5.jpg',
        content: '',
        date: new Date(moment().subtract(9, 'days').format()),
        location: {
            lat: 21.161907,
            lng: -86.851524,
            location: 'Cancun',
            duration: 1,
        }
    },
    {
        id: 3,
        slug: 'our-first-day-in-belize',
        titleColour: '#000000',
        title: 'Our first day in Belize',
        photo: 'photo-4.jpg',
        date: new Date(moment().subtract(7, 'days').format()),
        location: {
            duration: 3,
            lat: 17.477763,
            lng: -88.255911,
            location: 'Belize',
        }
    },
    {
        id: 4,
        slug: 'our-first-day-in-guatemala',
        titleColour: '#FFFFFF',
        title: 'Our first day in Guatemala',
        photo: 'photo-3.jpg',
        date: new Date(moment().subtract(5, 'days').format()),
        location: {
            duration: 3,
            lat: 14.580053,
            lng: -90.490899,
            location: 'Guatemala',
        }
    },
    {
        id: 5,
        slug: 'our-first-day-in-honduras',
        titleColour: '#FFFFFF',
        title: 'Our first day in Honduras',
        photo: 'photo-2.jpg',
        date: new Date(moment().subtract(2, 'days').format()),
        location: {
            duration: 3,
            lat: 14.073249,
            lng: -87.166326,
            location: 'Honduras',
        }
    },
    {
        id: 6,
        slug: 'our-first-day-in-nicaragua',
        titleColour: '#000000',
        title: 'Our first day in Nicaragua',
        photo: 'photo-1.jpg',
        date: new Date(),
        content: `<h1>Our first day in Nicaragua</h1><br /><p>Isnt this exciting</p>`,
        location: {
            duration: 3,
            lat: 12.291366,
            lng: -83.842397,
            location: 'Nicaragua',
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