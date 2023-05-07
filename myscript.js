const hasMeeting = false

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00PM',
        }
        resolve(meetingDetails)
    } else {
        reject(new Error('Meeting already scheduled'))
    }
})

const addToCalendar = (meetingDetails) => {
    //return new Promise((resolve, reject) => {
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calender)
    // })
}

meeting
    .then(addToCalendar)
    .then((res) => {
        console.log(JSON.stringify(res))
    })
    .catch((err) => {
        console.log(err.message)
    })

console.log('hello')

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 resolved')
    })
})

const promise2 = Promise.resolve('Promise1 resolved')

promise1.then((res) => console.log(res))
promise2.then((res) => console.log(res))

Promise.all([promise1, promise2]).then((res) => {
    console.log(res)
})

Promise.race([promise1, promise2]).then((res) => {
    console.log(res)
})

async function myMeeting() {
    try {
        const meetingDetails = await meeting
        const calender = await addToCalendar(meetingDetails)
        console.log(calender)
    } catch {
        console.log('Something has wrong')
    }
}

myMeeting()(
    // Use of IIFE

    function doSomething() {
        return {
            name: shakib,
            age: 30,
        }
    }
)()
