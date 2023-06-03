let data = [
    {
        "_id": "63877b93e00b54ef6589974f",
        "cuisineId": "a9f74f0d88aa",
        "cuisineName": "Biryani",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "Biryani is not just a food,It’s a love for many…..",
    },
    {
        "_id": "63877b93e00b54ef65899750",
        "cuisineId": "1ec68160f9c7",
        "cuisineName": "Pizza",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "Pizza is not a 'trend' it's a way of life",
    },
    {
        "_id": "63877b93e00b54ef65899751",
        "cuisineId": "ea50aca919c9",
        "cuisineName": "Burger",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "Satisfy your cravings with these fresh and flavoursome burgers",
    },
    {
        "_id": "63877b93e00b54ef65899752",
        "cuisineId": "211cc74e61c6",
        "cuisineName": "Chinese",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "A wholesome meal for a wholesome moment.",
    },
    {
        "_id": "63877b93e00b54ef65899755",
        "cuisineId": "0c27c87a369d",
        "cuisineName": "South Indian",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "The Essence of Delicious India",
    },
    {
        "_id": "63877b93e00b54ef65899756",
        "cuisineId": "0e7708056402",
        "cuisineName": "Sandwich",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "Get a SANDWICH for your bored taste buds",
    },
    {
        "_id": "63877b93e00b54ef65899759",
        "cuisineId": "ce86f8b24db6",
        "cuisineName": "Kebab",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "Listen to your heart! It says “Kebab, kebab, kebab”",
    },
    {
        "_id": "63877b93e00b54ef65899753",
        "cuisineId": "5ea817219c76",
        "cuisineName": "Desserts",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "There’s Always Time For Dessert",
    },
    {
        "_id": "63877b93e00b54ef65899754",
        "cuisineId": "7e0d1dba6a45",
        "cuisineName": "North Indian",
        "cuisineImage": "https://res.cloudinary.com/swiggy/image/upload/rng/md/carousel/product…",
        "__v": 0,
        "cuisineDescription": "The jewel of Indian tastes",
    }
]
let a = data.map((d)=>{
    return `${d.cuisineName}-${d.cuisineId}`
})
console.log(a);