import columnCreation from "./column_creation/member_card.js";

client.getEntries({ content_type: 'teamsPage' })
    .then((entry) => {
        const all_entries = entry.items
        
        all_entries.forEach(single_entry => {
            const title = single_entry.fields.memberName
            const image = single_entry.fields.memberImage.fields.file.url
            const designation = single_entry.fields.designation
            const profile_url = single_entry.fields.profileUrl

            columnCreation(image, title, designation, profile_url)
        });
        
    })
    .catch(console.error);