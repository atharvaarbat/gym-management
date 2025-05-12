import { GetAllExercise } from '@/action/exercise.action'
import WorkoutsList from '@/components/WorkoutsList'
import React from 'react'


const page = async () => {
    const AllExercise = await GetAllExercise()
    // console.log(AllExercise)
  return (
    <div>
        <WorkoutsList AllExercise={AllExercise}/>
    </div>
  )
}

export default page