import { useState } from 'react';
import workoutsData from './assets/data/workouts';
import { Center, MainImg, Img, Left, Right, Test, GlobalStyle } from './styles';

const Sport = () => {
    const [workouts, setWorkouts] = useState(workoutsData);
    const [currentWorkout, setCurrentWorkout] = useState(0);
    const [currentEx, setCurrentEx] = useState(0);

    const workout = workouts[currentWorkout];

    const nextWorkOut = () => {
        setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout);
    } // currentWorkout != currentWorkouts.length - 1 && setCurrentWorkout(workout + 1);

    const prevWorkout = () => {
        setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : 0);
    }
    return (
        <div>
            <GlobalStyle />
            <Test>
            <h1>
                <Left onClick={prevWorkout}></Left>
                {workout.title}
                <Right onClick={nextWorkOut}></Right>
            </h1>
            </Test>

            <Center>
                <MainImg src={workout.exercises[currentEx].img} />
                <Center>
                    {
                        workout.exercises.map((exercise, index) => <Img key={workout} active={index === currentEx} src={exercise.img} onClick={() => setCurrentEx(index)} />)
                    }
                </Center>
            </Center>

        </div>
    );
};

export default Sport;