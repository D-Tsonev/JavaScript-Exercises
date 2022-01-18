// *  ----- IMMUTABILITY ------ *
// *  💻 Remember "fn" key + "f8" to run  your code

// * 🦉 Practice

// ! ⚠️Remember to comment out your practice code before attempting below, "cmd" + "/"

// * **********************************************************************************

// ? Uncomment the following object, create a copy of it using the spread syntax and store in a const, and update the copy to change the username. Use console.log to check your work.

const user = {
  username: 'SyntacticSugarBear',
  email: 'jack@email',
}

const newUser = {
  ...user,
  username: 'newUserName',
}

console.log(user)
console.log(newUser)
// ? Uncomment the following array, create a copy of it using the spread syntax and store in a const, and a update the copy to contain a new item at the end or the array. Use console.log to check your work.

const bigCats = ['lion', 'tiger', 'cheetah']
const bigCatsCopy = [...bigCats, 'panther']
console.log(bigCats)
console.log(bigCatsCopy)

// ? Uncomment the following object. create a copy of it using the spread syntax, and a update the copy to change the values of the email account and the twitter acount. Use console.log to check your work.

const userProfile = {
  username: 'Jack',
  email: 'Jack@email',
  socialMedia: {
    twitter: '@jack',
    facebook: 'jackm',
    linkedIn: 'jackmay',
  },
}

const userProfileCopy = {
  ...userProfile,
  email: 'updatedEmal',
  socialMedia: {
    ...userProfile.socialMedia,
    twitter: 'updatedTweeter',
  },
}

console.log(userProfile)
console.log(userProfileCopy)
