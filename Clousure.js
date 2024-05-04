function x (){

    for(var i = 1 ; i<= 5 ; i ++){
        function close (x){
            setTimeout(function(){
                 console.log(x)
            },x * 1000)

        }
        close(i)
    }

}
x()


const DataFetch = () => new Promise ((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(responce => responce.ok ? resolve(responce.json()) : reject('faled to fetch'))
    .catch(error=> reject(error))
  })

  DataFetch()
  .then(userdata=>console.log(userdata))
  .catch(error => console.error('Error fetching user data:', error));

const data = () => new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response=>response.ok ? resolve(response.json()): reject('failed to fetch'))
})

data()
.then(userdata => console.log(userdata))
.catch(error=> console.error(error))


const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = response.ok ? await response.json() : Promise.reject('Failed to fetch user data');
      return console.log(userData) ;
    } catch (error) {
      throw new Error('Error fetching user data:', error);
    }
  };
  fetchData()

  const cars = [ 'doo','rrr','mdmd']
  let n = []
  for(let i = 0 ; i<cars.length ; i++){
    n.push(cars[i].slice(0,2))

  }
  console.log(n)


