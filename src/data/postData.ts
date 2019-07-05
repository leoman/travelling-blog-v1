import moment from 'moment';
import { PostModel, Status } from '../models/PostModel';

export const postData: PostModel[] = [
    {
        id: 1,
        title: 'Start of the journey, our bags are packed!',
        slug: 'start-of-the-journey',
        titleColour: '#000000',
        content: '',
        date: new Date(moment().subtract(10, 'days').format()),
        order: new Date(),
        photo: 'photo-6.jpg',
        status: Status.draft,
        location: {
            location: 'London',
            lat: 51.521585,
            lng: -0.017371,
            duration: 1,
            hideFromBounding: true,
        },
        photos: [],
    },
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