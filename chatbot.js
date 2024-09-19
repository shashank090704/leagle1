// Predefined list of Constitution articles with real-life examples
const constitutionActs = {
    "1": {
      title: "Article 1 - Name and territory of the Union",
      description: "Article 1 of the Indian Constitution states that India, that is Bharat, shall be a Union of States. It defines the geographical boundaries and the name of the country.",
      example: "Example: When India was formed in 1950, it was declared as a Union of States, including states like Uttar Pradesh and Maharashtra."
    },
    "2": {
      title: "Article 2 - Admission or establishment of new States",
      description: "Article 2 allows for the admission or establishment of new States into the Union of India through legislation by Parliament. This provision enables the creation of new states or the integration of territories into the Indian Union.",
      example: "Example: The creation of Telangana in 2014 as a new state was done through legislation under Article 2."
    },
    "3": {
      title: "Article 3 - Formation of new States and alteration of boundaries",
      description: "Article 3 empowers Parliament to create new states, alter state boundaries, or change the name of a state. It outlines the procedure for making such changes.",
      example: "Example: The bifurcation of Andhra Pradesh to form Telangana involved altering the boundaries as per Article 3."
    },
    "4": {
      title: "Article 4 - Laws made under Article 2 and 3 to be not deemed as Constitutional amendments",
      description: "Article 4 states that laws enacted under Articles 2 and 3 do not require amendment of the Constitution. They are considered as normal legislative procedures.",
      example: "Example: The law that established Telangana as a state was passed without amending the Constitution, as per Article 4."
    },
    "5": {
      title: "Article 5 - Citizenship at the commencement of the Constitution",
      description: "Article 5 provides for citizenship of India at the commencement of the Constitution. It defines who is a citizen of India at the time when the Constitution came into effect.",
      example: "Example: Anyone born in India or residing in India at the commencement of the Constitution in 1950 was considered a citizen of India under Article 5."
    },
    "6": {
      title: "Article 6 - Rights of citizenship of certain persons who have migrated to India from Pakistan",
      description: "Article 6 deals with the rights of citizenship for individuals who migrated from Pakistan to India before the Constitution came into effect. It defines the conditions for their citizenship.",
      example: "Example: Refugees who migrated from Pakistan to India before the Constitution was enacted in 1950 were granted citizenship under Article 6."
    },
    "7": {
      title: "Article 7 - Rights of citizenship of certain persons who migrated to Pakistan",
      description: "Article 7 addresses the rights of individuals who migrated from India to Pakistan and later returned. It outlines the conditions under which they can be considered citizens of India.",
      example: "Example: Indians who migrated to Pakistan and later returned to India could reclaim their citizenship under Article 7, subject to certain conditions."
    },
    "8": {
      title: "Article 8 - Rights of citizenship of certain persons of Indian origin residing outside India",
      description: "Article 8 provides for the rights of Indian citizens residing outside India, including those who have migrated to other countries. It defines the conditions for their citizenship.",
      example: "Example: Indians living abroad who were originally citizens of India retained their rights under Article 8, allowing them to return and regain citizenship."
    },
    "9": {
      title: "Article 9 - Persons voluntarily acquiring citizenship of a foreign State not to be citizens",
      description: "Article 9 states that any person who voluntarily acquires the citizenship of a foreign country will cease to be a citizen of India.",
      example: "Example: An Indian citizen who voluntarily becomes a U.S. citizen would cease to be an Indian citizen under Article 9."
    },
    "10": {
      title: "Article 10 - Continuance of the rights of citizenship",
      description: "Article 10 ensures that a citizen's rights remain intact, and their citizenship status continues unless it is specifically revoked under the law.",
      example: "Example: If an Indian citizen does not acquire foreign citizenship, their Indian citizenship remains intact under Article 10."
    },
    "34": {
      title: "Article 34 - Restriction on rights conferred by this Part while martial law is in force in any area",
      description: "Article 34 provides for the restriction of rights while martial law is in force in any area. It gives Parliament the authority to indemnify any government action during the enforcement of martial law.",
      example: "Example: If martial law is imposed in a state, civil liberties could be temporarily suspended under Article 34."
    },
    "100": {
      title: "Article 100 - Voting in Houses, power of Houses to act notwithstanding vacancies and quorum",
      description: "Article 100 describes how voting in both Houses of Parliament works, how a quorum is required for sessions to proceed, and how a House can function despite vacancies.",
      example: "Example: In any legislative session, the minimum number of members needed to be present (quorum) is determined under Article 100."
    },
    "101": {
      title: "Article 101 - Vacation of seats",
      description: "Article 101 deals with the vacation of seats in the Parliament. It outlines circumstances in which a member of Parliament must vacate their seat, such as holding an office of profit or being elected to both houses.",
      example: "Example: A member of Parliament who is elected to both the Lok Sabha and the Rajya Sabha must vacate one seat under Article 101."
    },
    "295": {
      title: "Article 295 - Succession to property, assets, rights, liabilities, and obligations in certain cases",
      description: "Article 295 deals with the succession of property, assets, rights, liabilities, and obligations of the Government of India and the States after the commencement of the Constitution.",
      example: "Example: When princely states were integrated into India, their property and liabilities were transferred to the Government of India under Article 295."
    },
    "370": {
      title: "Article 370 - Temporary provisions with respect to the State of Jammu and Kashmir",
      description: "Article 370 granted special autonomous status to Jammu and Kashmir. It allowed the state to have its own Constitution, and the Indian Parliament required the state government's approval to apply laws except in areas like defense, foreign affairs, finance, and communications.",
      example: "Example: In 2019, Article 370 was abrogated by the Indian government, removing the special status of Jammu and Kashmir."
    }
  };
  
  // Function to add messages to the chat area
  function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender + '-message');
    messageElement.innerHTML = `<p>${content}</p>`;  // Fix string interpolation with backticks
    document.getElementById('chat-area').appendChild(messageElement);
    document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
  }
  
  // Function to handle input from the user
  function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    
    if (userInput === "") {
      return;
    }
  
    addMessage(userInput, 'user');  // Add user message to the chat
    processActInput(userInput); // Process the input
    document.getElementById('user-input').value = ""; // Clear the input field
  }
  
  // Function to process user input and return the appropriate act details
  function processActInput(input) {
    const actNumber = input.trim();  // Allow both numeric and text inputs
    const act = constitutionActs[actNumber];
  
    if (act) {
      const response = `<strong>${act.title}</strong><br>${act.description}<br><br><em>${act.example}</em>`;
      addMessage(response, 'bot');
    } else {
      addMessage("Sorry, I don't have information on that article. Please try another.", 'bot');
    }
  }
  
  // Event listener for the send button
  document.getElementById('send-btn').addEventListener('click', handleUserInput);
  
  // Allow pressing "Enter" to send a message
  document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  });