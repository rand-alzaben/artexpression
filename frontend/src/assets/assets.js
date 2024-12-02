// Importing various image assets to be used across the application
import poem from './poem.png'; // Image for Poem speciality => used like icon purpose
import draw from './draw.png'; // Image for Drawing speciality => used like icon purpose
import photograph from './photograph.png'; // Image for Photography speciality => used like icon purpose
import profile_pic from './profile_pic.png'; // Profile Picture default 
import dropdown_icon from './dropdown_icon.png'; // Dropdown Icon
import group_profiles from './group_profiles.png'; // Group Profile Image
import header_img from './header_img.png'; // Header Image
import arrow_icon from './arrow_icon.png'; // Arrow Icon for navigation
import artist2 from './artist2.png'; // Artist 2 Image
import artist1 from './artist1.png'; // Artist 1 Image
import artist3 from './artist3.png'; // Artist 3 Image
import artist4 from './artist4.png'; // Artist 4 Image
import artist5 from './artist5.png'; // Artist 5 Image
import signup_img from './signup_img.png'; // Sign Up Image
import verified_icon from './verified_icon.jpg'; // Verified Icon Image
import about_image from './about_image.jpg'; // About Us Page Image
import photograph1 from './photograph1.jpg'; // Photograph 1 for Gallery
import photograph2 from './photograph2.jpg'; // Photograph 2 for Gallery
import photograph3 from './photograph3.jpg'; // Photograph 3 for Gallery
import photograph4 from './photograph4.jpg'; // Photograph 4 for Gallery
import photograph5 from './photograph5.jpg'; // Photograph 5 for Gallery
import photograph6 from './photograph6.jpg'; // Photograph 6 for Gallery
import photograph7 from './photograph7.jpg'; // Photograph 7 for Gallery
import photograph8 from './photograph8.jpg'; // Photograph 8 for Gallery
import painting1 from './painting1.jpg'; // Painting 1 for Gallery
import painting2 from './painting2.jpg'; // Painting 2 for Gallery
import painting3 from './painting3.jpg'; // Painting 3 for Gallery
import painting4 from './painting4.jpg'; // Painting 4 for Gallery
import painting5 from './painting5.jpg'; // Painting 5 for Gallery
import painting6 from './painting6.jpg'; // Painting 6 for Gallery
import painting7 from './painting7.jpg'; // Painting 7 for Gallery
import painting8 from './painting8.jpg'; // Painting 8 for Gallery
import painting9 from './painting9.jpg'; // Painting 9 for Gallery
import my_profile1 from './my_profile1.jpg'; // Profile Image 1
import my_profile2 from './my_profile2.jpg'; // Profile Image 2
import my_profile3 from './my_profile3.jpg'; // Profile Image 3
import my_profile4 from './my_profile4.jpg'; // Profile Image 4
import my_profile5 from './my_profile5.jpg'; // Profile Image 5
import upload_area from './upload_area.jpg'; //default  new creator image
import upload_icon from './upload_icon.png'; //default  new creator image
// Exporting all assets as an object for easier access in the app
export const assets = {
    poem,
    draw,
    photograph,
    profile_pic,
    dropdown_icon,
    group_profiles,
    header_img,
    arrow_icon,
    artist2,
    artist1,
    artist3,
    artist4,
    artist5,
    signup_img,
    verified_icon,
    about_image,
    photograph1,
    photograph2,
    photograph3,
    photograph4,
    photograph5,
    photograph6,
    photograph7,
    photograph8,
    painting1,
    painting2,
    painting3,
    painting4,
    painting5,
    painting6,
    painting7,
    painting8,
    painting9,
    my_profile1,
    my_profile2,
    my_profile3,
    my_profile4,
    my_profile5,
    upload_area,
    upload_icon
};

// Gallery items array contains details about each artwork
export const galleryItems = [
    {
        id: 1,
        artistId: 'artist1', // Assigned to Shiyar (Photographer)
        type: 'photograph', // Type of the artwork (photograph)
        title: 'Sculpture', // Title of the artwork
        image: assets.photograph1, // Image for this gallery item
        description: 'photograph sculpture by Shiyar', // Description of the artwork
    },
    {
        id: 2,
        artistId: 'artist1',
        type: 'photograph', 
        title: 'Sculpture',
        image: assets.photograph2,
        description: 'photograph sculpture by Shiyar',
    },
    {
        id: 3,
        artistId: 'artist1',
        type: 'photograph', 
        artistId: 'artist1',
        title: 'Sculpture',
        image: assets.photograph3,
        description: 'photograph sculpture by Shiyar',
    },
    {
        id: 4,
        artistId: 'artist1',
        type: 'photograph',
        title: 'Sculpture',
        image: assets.photograph4,
        description: 'photograph sculpture by Shiyar',
    },
    {
        id: 5,
        artistId: 'artist1',
        type: 'photograph',
        title: 'Sculpture',
        image: assets.photograph5,
        description: 'photograph sculpture by Shiyar',
    },
    {
        id: 6,
        artistId: 'artist1',
        type: 'photograph',
        title: 'Sculpture',
        image: assets.photograph6,
        description: 'photograph sculpture by Shiyar',
    },

    {
        id: 7,
        artistId: 'artist2', // Assigned to  (Painter)
        type: 'painting',
        title: 'painting oil',
        image: assets.painting1,
        description: 'lorem',
    },
    {
        id: 8,
        artistId: 'artist2',
        type: 'painting',
        title: 'painting oil',
        image: assets.painting2,
        description: 'lorem',
    },
    {
        id: 9,
        artistId: 'artist5',
        type: 'painting',
        title: 'painting oil',
        image: assets.painting3,
        description: 'lorem',
    },
    {
        id: 10,
        artistId: 'artist5',
        type: 'painting',
        title: 'painting oil',
        image: assets.painting4,
        description: 'lorem',
    },
    {
        id: 11,
        artistId: 'artist2',
        type: 'painting',
        title: 'painting oil',
        image: assets.painting5,
        description: 'lorem',
    },
    {
        id: 12,
        artistId: 'artist2',
        type: 'painting',
        title: 'painting oil',
        image: assets.painting6,
        description: 'lorem',
    },
    {
        id: 13,
        artistId: 'artist3', // Assigned to Rand Alzaben (Poet)
        type: 'poem', // Type of the artwork (poem)
        title: 'Phenomenal Woman by Maya Angelou',
        text: 'Pretty women wonder where my secret lies, I am not cute or built to suit a fashion models size, But when I start to tell them, They think I am telling lies, I say, It is in the reach of my arms, The span of my hips, The stride of my step, The curl of my lips, I ama woman, Phenomenally, Phenomenal woman, That is me', // Poem text
    },
    ,
    {
        id: 14,
        artistId: 'artist3',
        type: 'poem',
        title: 'If You Forget Me by Pablo Neruda',
        text: 'I want you to know one thing. You know how this is: if I look at the crystal moon, at the red branch of the slow autumn at my window, if I touch near the fire the impalpable ash or the wrinkled body of the log, everything carries me to you, as if everything that exists, aromas, light, metals, were little boats that sail toward those isles of yours that wait for me.',

    },
    {
        id: 15,
        artistId: 'artist3',
        type: 'poem',
        title: 'I Do Not Love You Except Because I Love You by Pablo Neruda',
        text: 'I do not love you except because I love you; I go from loving to not loving you, From waiting to not waiting for you My heart moves from cold to fire. I love you only because it is you the one I love; I hate you deeply, and hating you Bend to you, and the measure of my changing love for you Is that I do not see you but love you blindly.',

    },

    {
        id: 16,
        artistId: 'artist3',
        type: 'poem',
        title: 'Still I Rise  by Maya Angelou',
        text: 'You may write me down in history, With your bitter, twisted lies, You may tread me in the very dirt, But still, like dust, I ll rise, Does my sassiness upset you?, Why are you beset with gloom?, Cause I walk like I ve got oil wells, Pumping in my living room, Just like moons and like suns, With the certainty of tides, Just like hopes springing high, Still I ll rise, Did you want to see me broken?, Bowed head and lowered eyes?',

    },
    {
        id: 17,
        artistId: 'artist3',
        type: 'poem',
        title: 'Do Not Stand At My Grave And Weep by Mary Elizabeth Frye',
        text: 'Do not stand at my grave and weep I am not there. I do not sleep. I am a thousand winds that blow. I am the diamond glints on snow. I am the sunlight on ripened grain. I am the gentle autumn rain. When you awaken in the mornings hush I am the swift uplifting rush Of quiet birds in circled flight. I am the soft stars that shine at night. Do not stand at my grave and cry; I am not there. I did not die.',

    },
    {
        id: 18,
        artistId: 'artist3',
        type: 'poem',
        title: 'The Road Not Taken by Robert Frost',
        text: 'Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth; Then took the other, as just as fair, And having perhaps the better claim Because it was grassy and wanted wear, Though as for that the passing there Had worn them really about the same, And both that morning equally lay In leaves no step had trodden black. ',

    },
    {
        id: 19,
        artistId: 'artist4',
        type: 'photograph',
        title: 'city',
        image: assets.photograph7,
        description: 'Beirut',
    },
    {
        id: 20,
        artistId: 'artist4',
        type: 'photograph',
        title: 'city',
        image: assets.photograph8,
        description: 'Beirut',
    },
    {
        id: 21,
        artistId: 'artist5',
        type: 'painting',
        title: 'middle',
        image: assets.painting3, 
        description: 'middle by xxx',
    },
    {
        id: 21,
        artistId: 'artist5',
        type: 'painting',
        title: 'middle',
        image:  assets.painting8,
        description: 'middle by xxx',
    },
    {
        id: 21,
        artistId: 'artist5',
        type: 'painting',
        title: 'middle',
        image:  assets.painting9,
        description: 'middle by xxx',
    },
]

// Speciality art items (for example, different artist specialities)
export const specialityart = [
    {
        speciality: 'Poet',
        image: poem // Image related to the 'Poet' speciality
    },
    {
        speciality: 'Painter',
        image: draw // Image related to the 'Painter' speciality
    },
    {
        speciality: 'Photographer',
        image: photograph // Image related to the 'Photographer' speciality
    }
];

// Creators array stores information about each artist
export const creators = [
    {
        _id: 'artist1', // Unique identifier for the creator
        speciality: 'Photographer', // Creator's speciality
        name: 'Shiyar', // Name of the creator
        image: artist1, // Image of the creator
      
        about: 'Meet a talented 32-year-old Kurdish photographer', // Description about the creator
        address: { 
            line1: '456 Maple Avenue',
            line2: 'Fairview CA'
        },
        artwork: [photograph1, photograph2, photograph3,photograph4,photograph5,photograph6] // Array of artworks by this creator
    },
    {
        _id: 'artist2',
        speciality: 'Painter',
        name: 'Wajd Alzaben',
        image: artist2,
       
        about: 'Meet a gifted 14-year-old Palestinian girl whose passion for painting transcends boundaries and captures the essence of resilience, beauty, and cultural heritage. With each brushstroke, she brings to life vibrant scenes that tell stories of her homeland—its struggles, its hopes, and its enduring spirit.',
        address: {
            line1: 'Musterstraße 15',
            line2: '10115 Berlin'
        },
        artwork: [painting1,painting2,painting5,painting6]
    },
 
    {
        _id: 'artist3',
        speciality: 'Poet',
        name: 'Rand Alzaben',
        image: artist3,
      
        about: 'Meet a talented 24-year-old poet whose words weave emotions into vivid imagery. Hailing from a small town, her journey into poetry began as a means to express her innermost thoughts and connect with the world around her. Her verses, often inspired by the raw beauty of human emotions and the complexities of life, resonate deeply with readers of all ages a gifted 15-year-old Palestinian artist whose talent and passion light up her work. Through her art, she captures the resilience and beauty of her homeland, sharing stories of hope and strength. Blending youthful imagination with a deep cultural pride, she invites us to see the world through her unique perspective, creating pieces that speak to the heart and soul.',
        address: {
            line1: 'Schillerstrasse 45',
            line2: '80336 Muenchen'
        },
        poem: [
            {
                title: 'Still I Rise',
                content: 'You may write me down in history\nWith your bitter, twisted lies,\nYou may tread me in the very dirt\nBut still, like dust, I\'ll rise.'
            },
            {
                title: 'Dreams',
                content: 'Hold fast to dreams \nFor if dreams die\nLife is a broken-winged bird\nThat cannot fly\nHold fast to dreams\nFor when dreams go\nLife is a barren field\nFrozen with snow.'
            }
        ]
    },
        {
            _id: 'artist4',
            speciality: 'Photographer',
            name: 'Nadia Rahman',
            image: artist4,
          
            about: 'Nadia is a Lebanese photographer with a keen eye for capturing the natural beauty and resilience of people in her community. Her work often explores themes of identity, hope, and survival, sharing powerful stories through her lens.',
            address: {
                line1: '89 Cedar Avenue',
                line2: 'Beirut, Lebanon'
            },
            artwork: ['photograph7' , 'photograph8']  
        },

        {
            _id: 'artist5',
            speciality: 'Painter',
            name: 'Youssef Hamdi',
            image: artist5,  
      
            about: 'Youssef is a Syrian painter whose works evoke the rich cultural heritage of his homeland. Through vivid colors and intricate details, he conveys the stories and emotions of his people, offering glimpses into the soul of Syria.',
            address: {
                line1: '24 Olive Road',
                line2: 'Damascus, Syria'
            },
            artwork: ['painting3.jpg', 'painting8.jpg', 'painting9.jpg']  
        }
];