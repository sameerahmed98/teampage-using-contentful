// Function to create a column for a team member with their details
function columnCreation(member_img_url, member_title, member_designation, profile_url){
    
    // Select the main div where the column will be added
    const main_div = document.querySelector('#parentDiv')
    
    // Create a new div element for the member's column and add Bootstrap classes for the card
    const creating_column_for_member = document.createElement('div')
    creating_column_for_member.classList.add('card', 'col')

    // Create an image element for the member's picture and set the source to the image URL
    const add_member_image = document.createElement('img')
    add_member_image.src = `https:${member_img_url}`  // Ensure the URL is properly formatted
    add_member_image.classList.add('rounded', 'pt-2')  // Bootstrap classes for rounded corners and padding

    // Create a div element to hold the card's body content
    const card_body_div = document.createElement('div')
    card_body_div.className = 'card-body'

    // Create an h5 element for the member's title (name) and set its text content
    const add_member_title = document.createElement('h5')
    add_member_title.className = 'card-title'
    add_member_title.innerText = member_title

    // Create a paragraph element for the member's designation and set its text content
    const add_member_description = document.createElement('p')
    add_member_description.className = 'card-text'
    add_member_description.innerText = member_designation

    // Create an anchor tag for the 'View profile' button, linking to the member's profile URL
    const create_button = document.createElement('a')
    create_button.href = profile_url  // Set the href attribute to the member's profile URL
    create_button.innerText = 'View profile'  // Button text
    create_button.target = '_blank'  // Open the profile in a new tab
    create_button.classList.add('btn', 'btn-primary')  // Bootstrap classes for button styling

    // Append the title, description, and button to the card body div
    card_body_div.appendChild(add_member_title)
    card_body_div.appendChild(add_member_description)
    card_body_div.appendChild(create_button)

    // Append the image and card body to the member's column div
    creating_column_for_member.appendChild(add_member_image)
    creating_column_for_member.appendChild(card_body_div)

    // Finally, append the member's column to the main div in the HTML
    main_div.appendChild(creating_column_for_member)
}

// Function to dynamically load the custom CSS file for the member card styling
function loadCSS() {
    const customCSS = document.createElement('link')  // Create a link element to load a CSS file
    customCSS.rel = 'stylesheet'  // Set the relation type to stylesheet
    customCSS.href = './column_creation/custom.css'  // Path to the custom CSS file
    customCSS.type = 'text/css'  // Set the type to text/css

    document.head.appendChild(customCSS)  // Append the link tag to the head of the document to load the CSS
}

// Load the custom CSS when the script runs
loadCSS()

// Export the columnCreation function to make it available for use in other files
export default columnCreation