function line(){
            
    // string part

    let path = "M 10 100 Q 500 100 990 100";
    let finalPath = "M 10 100 Q 500 100 990 100";

    let stringEl = document.querySelector(".string");

    stringEl.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
        });
    });

    stringEl.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 2,
        ease: "elastic.out(1,0.2)",
        });
    });
}


function curser(){

        // Define some colors and shapes for particles
        const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
        const shapes = ['circle', 'square', 'ellipse'];

        document.addEventListener('mousemove', (event) => {
            const fog = document.createElement('div');
            fog.className = 'fog';

            // Offset the fog position to start from the (18, 36) corner of the SVG
            const fogX = event.clientX + 18;
            const fogY = event.clientY + 36;
            fog.style.left = `${fogX}px`;
            fog.style.top = `${fogY}px`;

            document.body.appendChild(fog);

            setTimeout(() => {
                fog.remove();
            }, 1000);
        });

        document.addEventListener('click', (event) => {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';

                // Random color, size, and shape
                const color = colors[Math.floor(Math.random() * colors.length)];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const size = Math.random() * 10 + 7; // Random size between 5 and 15

                particle.style.backgroundColor = color;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.borderRadius = shape === 'circle' ? '50%' : (shape === 'square' ? '0' : '50%');

                // Random initial direction and speed
                const angle = Math.random() * 2 * Math.PI;
                const speed = Math.random() * 5 + 2; // Speed between 2 and 7

                // Set the particle's initial position and animation
                particle.style.left = `${event.clientX + (Math.random() - 0.5) * 20}px`;
                particle.style.top = `${event.clientY + (Math.random() - 0.5) * 20}px`;

                // Add particle to the document
                document.body.appendChild(particle);

                // Animate the particle
                particle.animate([
                    { transform: `translate(${Math.cos(angle) * speed}px, ${Math.sin(angle) * speed}px)` },
                    { transform: `translate(${Math.cos(angle) * speed * 2}px, ${Math.sin(angle) * speed * 2}px)` }
                ], {
                    duration: 1000,
                    fill: 'forwards'
                });

                // Remove the particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        });
}




curser();
//line();