//===============EVENT LISTENERS=======================================================================

document.getElementById('myAbout').addEventListener("mouseover",function handler(){createTypingEffect("myAbout", 21);document.getElementById('myAbout').removeEventListener("mouseover",handler);})
//=============================================================================================




function animateText() {
    const textElement = document.getElementById('changeColours');
    const colors = [
        "#FFD700", "#9932CC", "#CD853F", "#87CEEB", "#E6E6FA", "#FF6347",
        "#7B68EE", "#00CED1", "#FFFAFA", "#A52A2A", "#FFA500", "#FF69B4",
        "#4169E1", "#D8BFD8", "#2E8B57", "#FFE4B5", "#FFB6C1", "#DC143C",
        "#A9A9A9", "#778899", "#FFE4C4", "#696969", "#32CD32", "#6495ED",
        "#800080", "#FFDAB9", "#D2691E", "#BC8F8F", "#FF00FF", "#3F013F",
        "#DDA0DD", "#EE82EE", "#40E0D0", "#800000", "#5A5A5A", "#6A0572",
        "#9933CC", "#1E90FF", "#FFC0CB", "#F4A460", "#3CB371", "#00FFFF",
        "#3CB371", "#CD853F", "#00FF00", "#A0522D", "#FFE4C4", "#DA70D6",
        "#F0E68C", "#FFDAB9", "#FFC0CB", "#00CED1", "#FFFFFF", "#FFA500",
        "#7B68EE", "#778899", "#87CEFA", "#EE82EE", "#FFD700", "#FFC0CB",
        "#FF1493", "#A9A9A9", "#FF7F50", "#FFE4C4", "#1E90FF", "#FF00FF"
    ]
    
    let colorIndex = 0;
   

    setInterval(() => {
        // Change color
        textElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;

    }, 250);
}
animateText()


//=============SKILLS====================
function displaySkillsFormatted() {
    const skillsByCategory = [
        { heading: "FrontEnd Development:", skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"] },
        { heading: "Backend Development:", skills: ["Django"] },
        { heading: "Python Programming:", skills: ["Tkinter", "Matplotlib", "Django", "Seaborn", "Sklearn"] },
        { heading: "Music and Instrumental Production", skills: [] },
        { heading: "Mathematics", skills: [] },
        { heading: "Computer Repairing Skills", skills: [] }
    ];

    const container = document.getElementById("skillsContainer");
    let categoryIndex = 0;
    let skillIndex = -1; // Start with the heading first

    function displayNext() {
        const currentCategory = skillsByCategory[categoryIndex];

        if (skillIndex === -1) {
            // Display heading
            const headingElement = document.createElement("h3");
            headingElement.textContent = currentCategory.heading;
            headingElement.style.marginTop = "20px"; // Add spacing between headings
            headingElement.style.color = "lavernder"; // Optional: Set heading color
            container.appendChild(headingElement);
            skillIndex = 0; // Move to skills
        } else if (skillIndex < currentCategory.skills.length) {
            // Display skill (indented and smaller text)
            const skillElement = document.createElement("p");
            skillElement.textContent = currentCategory.skills[skillIndex];
            skillElement.style.marginLeft = "20px"; // Indentation
            skillElement.style.fontSize = "14px"; // Smaller text size
            skillElement.style.color = "#D3D3D3"; // Optional: Set skill color
            container.appendChild(skillElement);
            skillIndex++; // Move to the next skill
        } else {
            // Move to the next category
            categoryIndex++;
            skillIndex = -1; // Reset for the new category
        }

        // Keep displaying until all categories and skills are shown
        if (categoryIndex < skillsByCategory.length) {
            setTimeout(displayNext, 1000); // 1-second interval
        }
    }

    displayNext();
}
displaySkillsFormatted()

//=========TYPING EFFECT= ===============================

//------description typing effect---------------------------

function descriptionTypingEffect(id, speed) {
    const element = document.getElementById(id);
    const text = element.textContent; // Retrieve the full text
    element.textContent = ""; // Clear the content initially
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Add one character at a time
            index++;
            setTimeout(typeChar, speed); // Adjust speed based on the argument
        }
    }

    typeChar(); // Start typing effect
}

// Add hover event listener for the container
const container = document.querySelector('.container');
container.addEventListener("mouseover", function handler() {
    // Select all elements with the class 'description'
    const descriptions = document.querySelectorAll('.description');

    // Apply the typing effect to each description
    descriptions.forEach((description, index) => {
        description.id = `description-${index}`; // Assign unique IDs dynamically
        descriptionTypingEffect(description.id, 50); // 50ms typing speed for each description
    });

    // Remove event listener to prevent repeated activation
    container.removeEventListener("mouseover", handler);
});

//====================

//------------------------------------------------------

function createTypingEffect(id, speed) {
    const element = document.getElementById(id);
    const text = element.textContent; // Get the full text content
    element.textContent = ""; // Clear the content initially
    let index = 0;

    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index); // Add one character at a time
            index++;
            setTimeout(typeChar, speed); // Adjust speed based on the argument
        }
    }

    typeChar(); // Start typing effect
}
//=============  SKILLS  ==================================================

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const fillElement = card.querySelector('.fill');
      const skill = card.dataset.skill;
      fillElement.style.backgroundColor = skill === 'CSS' ? '#007BFF' :
                                           skill === 'JavaScript' ? '#F7DF1E' :
                                           '#4CAF50'; // Choose unique color for each skill
    });
    card.addEventListener('mouseleave', () => {
      const fillElement = card.querySelector('.fill');
      fillElement.style.backgroundColor = '#4CAF50'; // Default color
    });
  });
