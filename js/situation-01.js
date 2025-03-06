const initialPositions = {            
    p: { top: "55.18%", left: "49.38%" },
    c: { top: "83.66%", left: "49.38%" },
    firstBase: { top: "46.93%", left: "65.63%" },
    secondBase: { top: "33.95%", left: "56.25%" },
    ss: { top: "33.98%", left: "43.13%" },
    thirdBase: { top: "46.93%", left: "30%" },
    lf: { top: "27.51%", left: "23.75%" },
    cf: { top: "16.18%", left: "49.38%" },
    rf: { top: "27.51%", left: "76.25%" },
    ball: { top: "80.10%", left: "49.38%" }, 
    batter: { top: "80.10%", left: "51.88%" }
};
function runPlay() {

    // Disable the button
        document.querySelector("button").disabled = true;

    // Hide arrow overlay
    gsap.to("#arrowOverlay", { opacity: 0, duration: 0.15 });

    // Ball is hit to LF from home plate
    gsap.to("#ball", { top: "30.74%", left: "25.63%", duration: 1.5 });

    // LF moves toward ball
    gsap.to("#lf", { top: "30.74%", left: "25.63%", duration: 1.5 });

    // Delay to simulate throw from LF to SS (relay)
    gsap.to("#ball", { top: "33.98%", left: "34%", duration: 1.5, delay: 1.5 });

    // SS moves into relay position
    gsap.to("#ss", { top: "33.98%", left: "34%", duration: 1 });

    // Ball moves from SS to 2B
    gsap.to("#ball", { top: "33.66%", left: "49.38%", duration: 1, delay: 3 });

    // 3B moves Base
    gsap.to("#thirdBase", { top: "57.44%", left: "31.25%", duration: 1.5 });

    // 1B to Base
    gsap.to("#firstBase", { top: "57.44%", left: "67.50%", duration: 1.5 });

    //2B to Base for throw from SS
    gsap.to("#secondBase", { top: "34.79%", left: "49.38%", duration: 1.5 });

    //CF to backup LF
    gsap.to("#cf", { top: "25.08%", left: "20.63%", duration: 1.5 });

    //RF to top of Infield for backup
    gsap.to("#rf", { top: "33.17%", left: "61.25%", duration: 1.5 });

    //P to backup toss to 2B
    gsap.to("#p", { top: "43.69%", left: "56.88%", duration: 1.5 });

    //C follow Runner
    gsap.to("#c", { top: "66.34%", left: "61.25%", duration: 2.5 });

    // Batter to 1B
    gsap.to("#batter", { top: "57.44%", left: "66.25%", duration: 2.5 });

    // Batter round 1B
    gsap.to("#batter", { top: "51.78%", left: "63.75%", duration: 1.5, delay: 2.5 });

    // Batter back to 1B
    gsap.to("#batter", { top: "57.44%", left: "66.25%", duration: 2, delay: 5 });

    // Pitcher to Mound
    gsap.to("#p", { top: "55.18%", left: "49.38%", duration: 1.5, delay: 7 }); 

    // Ball to Pitcher
    gsap.to("#ball", { top: "55.18%", left: "49.38%", duration: 1, delay: 7.5 }); 

    // Reset the animation after 7.5 seconds
    setTimeout(resetPlay, 10000);

}
function resetPlay() {
    Object.keys(initialPositions).forEach(id => {
        gsap.to(`#${id}`, { 
            top: initialPositions[id].top, 
            left: initialPositions[id].left, 
            duration: 1 
        });
    });

    // Fade in the arrow overlay again
    gsap.to("#arrowOverlay", { opacity: 1, duration: 0.5 });

    // Re-enable button
    document.querySelector("button").disabled = false;
}