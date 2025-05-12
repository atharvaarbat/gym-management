'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from './ui/badge'
import { Dumbbell, ListFilter } from 'lucide-react'
import { Input } from './ui/input'

type Props = {
    AllExercise: any[]
}

const WorkoutsList = ({AllExercise}: Props) => {
    // console.log(AllExercise)
  return (
    <div className='space-y-4'>
    <Input
        placeholder="Search..."
        className="w-full md:w-1/2 lg:w-1/3"
    />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {
            AllExercise.map((item) => {
                return ExerciseCard(item)
            })
        }
    </div>
    </div>

  )
}

export default WorkoutsList

const ExerciseCard = (exercise: any) => {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg w-full py-0">
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exercise.images[0]}` || "https://cdn.dribbble.com/userupload/21207141/file/original-af25d78fac8dc71b312d8b0bef78c93b.jpg?resize=752x&vertical=center"}
                    alt={exercise.name}
                    className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                />
                <Badge className="absolute top-2 right-2 hover:bg-primary capitalize">{exercise.level}</Badge>
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold line-clamp-2">{exercise.name}</CardTitle>
                <CardDescription className="flex gap-4 text-sm text-muted-foreground">

                    <div className="flex items-center text-sm">
                        <ListFilter className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground capitalize">{exercise.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <Dumbbell className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground capitalize">{exercise.equipment}</span>
                    </div>
                </CardDescription>
            </CardHeader>
            {/* <CardFooter className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${price.toFixed(2)}</span>
                    {slicedPrice && (
                        <span className="text-sm text-muted-foreground line-through">${slicedPrice.toFixed(2)}</span>
                    )}
                </div>
                <Link href={`/admin/${id}`}>
                    <Button size="sm" className="rounded-full px-4 cursor-pointer">Edit</Button>
                </Link>
            </CardFooter> */}
        </Card>
    )
}