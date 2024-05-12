import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../UI/Footer';
import "../../styles/Classes.css";
import "../../styles/header.css";



const Classes = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const exercises = [
        {
            "name": "Incline Hammer Curls",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "beginner",
            "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/9XWLM49qZvM?si=_y6T_p6MSniBItCV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "Wide-grip barbell curl",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "barbell",
            "difficulty": "beginner",
            "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/crk9ZzNAG_Q?si=HrfSXMTNOLy4eeNt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "EZ-bar spider curl",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "barbell",
            "difficulty": "intermediate",
            "instructions": "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. ",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/WG3vdcq__I0?si=sDLva2ZH4FZeKDWe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "Hammer Curls",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "intermediate",
            "instructions": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/OPqe0kCxmR8?si=vhud3LSKqgA6_H5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "EZ-Bar Curl",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "e-z_curl_bar",
            "difficulty": "intermediate",
            "instructions": "Stand up straight while holding an EZ curl bar at the wide outer handle. The palms of your hands should be facing forward and slightly tilted inward due to the shape of the bar. Keep your elbows close to your torso. This will be your starting position. Now, while keeping your upper arms stationary, exhale and curl the weights forward while contracting the biceps. Focus on only moving your forearms. Continue to raise the weight until your biceps are fully contracted and the bar is at shoulder level. Hold the top contracted position for a moment and squeeze the biceps. Then inhale and slowly lower the bar back to the starting position.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/kwG2ipFRgfo?si=NNYXEAXtDtTEm4BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        },
        {
            "name": "Zottman Curl",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "None",
            "difficulty": "intermediate",
            "instructions": "Stand up with your torso upright and a dumbbell in each hand being held at arms length. The elbows should be close to the torso. Make sure the palms of the hands are facing each other. This will be your starting position. While holding the upper arm stationary, curl the weights while contracting the biceps as you breathe out. Only the forearms should move. Your wrist should rotate so that you have a supinated (palms up) grip. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second as you squeeze the biceps. Now during the contracted position, rotate your wrist until you now have a pronated (palms facing down) grip with the thumb at a higher position than the pinky. Slowly begin to bring the dumbbells back down using the pronated grip.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/ZrpRBgswtHs?si=Kjlg9TbToYWkd7X1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "Biceps curl to shoulder press",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "beginner",
            "instructions": "Begin in a standing position with a dumbbell in each hand. Your arms should be hanging at your sides with your palms facing forward. Look directly ahead, keeping your chest up, with your feet shoulder-width apart. This will be your starting position. Initiate the movement by flexing the elbows to curl the weight. Do not use momentum or flex through the shoulder, instead use a controlled motion. Execute the pressing movement by extending the arm, flexing and abducting the shoulder to rotate the arm as you press above your head. Pause at the top of the motion before reversing the movement to return to the starting position. Complete the desired number of repetitions before switching to the opposite side.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/HtiY7tWu96s?si=vSKUTMDqS24rDwpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "Concentration curl",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "intermediate",
            "instructions": "Sit down on a flat bench with one dumbbell in front of you between your legs. Your legs should be spread with your knees bent and feet on the floor. Use your right arm to pick the dumbbell up. Place the back of your right upper arm on the top of your inner right thigh. Rotate the palm of your hand until it is facing forward away from your thigh. Tip: Your arm should be extended and the dumbbell should be above the floor. This will be your starting position. While holding the upper arm stationary, curl the weights forward while contracting the biceps as you breathe out. Only the forearms should move. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Tip: At the top of the movement make sure that the little finger of your arm is higher than your thumb. This guarantees a good contraction. Hold the contracted position for a second as you squeeze the biceps.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/VMbDQ8PZazY?si=PLeHgzN5K64ynjBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        },
        {
            "name": "Flexor Incline Dumbbell Curls",
            "type": "strength",
            "muscle": "biceps",
            "equipment": "dumbbell",
            "difficulty": "beginner",
            "instructions": "Hold the dumbbell towards the side farther from you so that you have more weight on the side closest to you. (This can be done for a good effect on all bicep dumbbell exercises). Now do a normal incline dumbbell curl, but keep your wrists as far back as possible so as to neutralize any stress that is placed on them. Sit on an incline bench that is angled at 45-degrees while holding a dumbbell on each hand. Let your arms hang down on your sides, with the elbows in, and turn the palms of your hands forward with the thumbs pointing away from the body. Tip: You will keep this hand position throughout the movement as there should not be any twisting of the hands as they come up. This will be your starting position. Curl up the two dumbbells at the same time until your biceps are fully contracted and exhale. Tip: Do not swing the arms or use momentum. Keep a controlled motion at all times.",
            "video": <iframe className='exercise-yt-videos' width="560" height="315" src="https://www.youtube.com/embed/zFiQuXeFEuI?si=9zjkzDQG26eH-my8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        }
    ];

    return (
        <>
            <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
                <Header className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                <div className="exercise-container">
                    <h1>Workouts For Free</h1>
                    {exercises.map((exercise, index) => (
                        <div key={index} className="exercise-card">
                            <div className="exercise-details">
                                <h2 className="exercise-name">{exercise.name}</h2>
                                <p className='exercise-description'>Type : <span className='exercise-minors'><b>{exercise.type}</b></span></p>
                                <p className='exercise-description'>Target Muscles : <span className='exercise-minors'><b>{exercise.muscle}</b></span></p>
                                <p className="exercise-instructions">{exercise.instructions}</p>
                                <div className="exercise-meta">
                                    <span className="exercise-description">Equipments : <span className='exercise-minors'><b>{exercise.equipment}</b></span></span>
                                    <span className="exercise-minors"><b>{exercise.difficulty}</b></span>
                                </div>
                            </div>
                            <div className="exercises-video">
                                {exercise.video}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Classes;
