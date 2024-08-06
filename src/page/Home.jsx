import { MdDescription } from "react-icons/md"
import Card from "../components/Card/Card"

export const Data = [
    {   
        id: 1,
        img: "https://estaticos.elperiodico.com/resources/jpg/7/7/1469702567477.jpg",
        title: "Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 2,
        img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_662104d99aebf023f3ac978f_6621059eb98f5221fb3a4b38/scale_1200",
        title: "Title2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
        description: "lkhhjgjhffhg"
    },

    {   
        id: 3,
        img: "https://mytashkent.uz/wp-content/uploads/2016/02/m11.jpg",
        title: "Title3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 4,
        img: "https://nova24.uz/wp-content/uploads/old/uploads/2020/09/b50f5fb33edcd03eb56a9097d3be7d33.jpg",
        title: "Title4",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 5,
        img: "http://s1.fotokto.ru/photo/full/28/288523.jpeg",
        title: "Title5",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 6,
        img: "https://cdn1.img.sputniknews.uz/img/07e5/06/0b/19204480_72:0:1208:852_1920x0_80_0_0_a1169f57c251d738e7a32ab32dbedf66.jpg",
        title: "Title6",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },
    {   
        id: 7,
        img: "https://ulysmedia.kz/cache/imagine/1200/uploads/news/2023/07/08/64a96b64d10f6995018139.jpg",
        title: "Title7",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },
    {   
        id: 8,
        img: "https://cdn.britannica.com/56/7256-050-F9152A7C/Uzbekistan-map-features-locator.jpg",
        title: "Title8",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 9,
        img: "https://www.ohchr.org/sites/default/files/Uzbekistan-820703637-World-Bank.jpg",
        title: "Title9",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 10,
        img: "https://kazanvl.ru/upload/medialibrary/b13/4b00a866aff177328aea0362202b1321.jpg",
        title: "Title10",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 11,
        img: "https://pic.rutubelist.ru/video/6d/83/6d83b546d4958e21f95276d6fb4e8d2b.jpg",
        title: "Title11",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 12,
        img: "https://culture-rzn.ru/anews/04062023064006190.jpg",
        title: "Title12",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    },

    {   
        id: 13,
        img: "https://static.mk.ru/upload/entities/2023/10/04/13/articles/facebookPicture/6d/2c/1a/f3/b713ba5af0773f48a64a3cd129f542b3.jpg",
        title: "Title13",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi nostrum fugiat, ullam ea sapiente voluptatibus atque quo quia ipsa?",
    }
]
const Home = () => {
    return (
        <main>
            {
                Data.map((el, index) => {
                    return <Card data = { el } key = { index } />
                })
            }
     
        </main>
    )
}
export default Home