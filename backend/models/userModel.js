import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QALBABAAICAAQFAgYDAAAAAAAAAAECAxEEITFBEjJRYXETkRQiQlKB8TOhsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAADm49TceoOgAAAAAAAAAAAAAAAAAI2tFUb37VVgnOSZ+EJmZ6gAABEzHSUq3mPdEBdW8T7JM6dL68wLQ6gAAAAAAAAAACrJbfKOiWSdR7qgAAAcmYiNzOvcHRTbiccdN2+COJxz13ALhytotG6zv4dAABOltTrstZ1uO240CYAAAAAAAAOWnUSCq87tPsiAAAOWtFazaekMOXJOS3Pp6L+LnVK19erKAAqJUvNJ3X7N2O8Xr4o/p57Rwdudq9p5orUAA7WdWiXAGgRpO6wkAAAAAAAhk8spoZPKCoAAAGbjOtGZr4uu6RaI8s82RQAEF/Cf5J+FDTwdfNefhBpAFAAWYp5T8rFeLusAAAAAAARvG6ykT0BnCY1IAABMRManpPVizYZpP5YmatqP1KR+qv3B542THD26+H+J05FeHr0mv8zsFGLFbJPSYr3ltrWKxER0hz6mP91fu7E76cwdAAABbi8qblY1EOgAAAAAAAAqyRz2gvmNwptXwzoHFWfLGONRztPZZa0UrNp7Q8+Zm0zM9ZB2+S953a0yiCoAAO1tak7rMxLgDZhzRf8tuVv+rnm99t+K/1McW790VNLHG7b7QjHOeS+tfDGgdAAAAAAAAAARtXxQkAxcZE1x6nvLE9fJjrlr4bxuGDNwl8fOm7V/2DOAqAAAADVwc7i1ffaGLhsmTnMeGvrLfhw0w11WPmfUV2lYhMEAAAAAAAAAAAAAAFeTDjyeesTPqotwNP02mPnm1gMH4G3a9fsfgb/vr9m8BjrwMR5rTPwvx4MWPy05+s81oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" },
    adress: { type: Object, default:{line1:'', line2:''} },
    gender: {type:String, default:"Not Selected"},
    dob: {type:String, default:"Not Selected"},
    phone: {type:String, default:"00000000"}

  
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)


export default userModel