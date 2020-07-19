let counter = 0 

const inception = (value) => {
  if(value >= 3) {
    console.log('Done');// `Done!`
  }
  counter++ 
  return inception
}


inception(4)