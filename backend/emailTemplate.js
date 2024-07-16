export const generateEmailHtml = (data) => {
    console.log('Data received:', data); // For debugging

    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Application Form Submission</h2>

            <h3>Applicant Information</h3>
            <p><strong>Applicant Name:</strong> ${data['Applicant name'] || 'N/A'}</p>
            <p><strong>Applicant Date of Birth:</strong> ${data['Applicant date of birth'] || 'N/A'}</p>
            <p><strong>Applicant Email:</strong> ${data['Applicant email'] || 'N/A'}</p>
            <p><strong>Applicant Telephone Number:</strong> ${data['Applicant telephone number'] || 'N/A'}</p>
            <p><strong>Applicant Work Phone:</strong> ${data['Applicant work phone'] || 'N/A'}</p>
            <p><strong>Applicant Present Address:</strong> ${data['Applicant present address'] || 'N/A'}</p>
            <p><strong>Applicant Duration at Present Address:</strong> ${data['Applicant duration at present address'] || 'N/A'}</p>

            <h3>Vehicle Information</h3>
            <p><strong>Vehicle Make and Model:</strong> ${data['Vehicle make and model'] || 'N/A'}</p>
            <p><strong>Vehicle Year:</strong> ${data['Vehicle year'] || 'N/A'}</p>
            <p><strong>Vehicle License Plate:</strong> ${data['Vehicle license plate'] || 'N/A'}</p>
            <p><strong>Vehicle Color:</strong> ${data['Vehicle color'] || 'N/A'}</p>

            <h3>Current Employment</h3>
            <p><strong>Employment Status:</strong> ${data['Employment status-Full-time'] || 'N/A'}</p>
            <p><strong>Present Employer:</strong> ${data['Present employer'] || 'N/A'}</p>
            <p><strong>Years Employed:</strong> ${data['Years employed'] || 'N/A'}</p>
            <p><strong>Employer’s Address:</strong> ${data['Employer’s address'] || 'N/A'}</p>
            <p><strong>Position / Work Performed:</strong> ${data['Position / work performed'] || 'N/A'}</p>
            <p><strong>Supervisor’s Name:</strong> ${data['Supervisor’s name'] || 'N/A'}</p>
            <p><strong>Supervisor’s Phone Number:</strong> ${data['Supervisor’s phone number'] || 'N/A'}</p>
            <p><strong>Date Hired:</strong> ${data['Date hired'] || 'N/A'}</p>
            <p><strong>Monthly Income:</strong> ${data['Monthly income'] || 'N/A'}</p>

            <h3>Current Address</h3>
            <p><strong>Current Address:</strong> ${data['Current address'] || 'N/A'}</p>
            <p><strong>Current Address Duration:</strong> ${data['Current address duration'] || 'N/A'}</p>
            <p><strong>Current Landlord Name:</strong> ${data['Current landlord name'] || 'N/A'}</p>
            <p><strong>Current Landlord Phone Number:</strong> ${data['Current landlord phone number'] || 'N/A'}</p>
            <p><strong>Previous Landlord Name:</strong> ${data['Previous landlord name'] || 'N/A'}</p>
            <p><strong>Previous Landlord Phone Number:</strong> ${data['Previous landlord phone number'] || 'N/A'}</p>

            <h3>Other Sources of Income</h3>
            <p><strong>Income Source 1:</strong> ${data['Income source 1'] || 'N/A'}</p>
            <p><strong>Monthly Amount 1:</strong> ${data['Monthly amount 1'] || 'N/A'}</p>
            <p><strong>Income Source 2:</strong> ${data['Income source 2'] || 'N/A'}</p>
            <p><strong>Monthly Amount 2:</strong> ${data['Monthly amount 2'] || 'N/A'}</p>

            <h3>Character Reference</h3>
            <p><strong>Character Reference Name:</strong> ${data['Character reference name'] || 'N/A'}</p>
            <p><strong>Character Reference Phone Number:</strong> ${data['Character reference phone number'] || 'N/A'}</p>
            <p><strong>Character Reference Relationship:</strong> ${data['Character reference relationship'] || 'N/A'}</p>
            <p><strong>Character Reference Known For How Long:</strong> ${data['Character reference known for how long'] || 'N/A'}</p>

            <h3>Bank Information</h3>
            <p><strong>Bank Name and Branch Location:</strong> ${data['Bank name and branch location'] || 'N/A'}</p>
            <p><strong>Bank Manager’s Name:</strong> ${data['Bank manager’s name'] || 'N/A'}</p>
            <p><strong>Bank Manager’s Phone Number:</strong> ${data['Bank manager’s phone number'] || 'N/A'}</p>
            <p><strong>Bank Account Number:</strong> ${data['Bank account number'] || 'N/A'}</p>
            <p><strong>Credit Rating:</strong> ${data['Credit rating'] || 'N/A'}</p>

            <h3>Emergency Contact</h3>
            <p><strong>Emergency Contact Name:</strong> ${data['Emergency contact name'] || 'N/A'}</p>
            <p><strong>Emergency Contact Phone Number:</strong> ${data['Emergency contact phone number'] || 'N/A'}</p>
            <p><strong>Emergency Contact Relationship:</strong> ${data['Emergency contact relationship'] || 'N/A'}</p>
            <p><strong>Emergency Contact Second Phone Number:</strong> ${data['Emergency contact second phone number'] || 'N/A'}</p>

            <h3>Other Occupants</h3>
            <p><strong>Occupant 1 Name:</strong> ${data['Occupant 1 name'] || 'N/A'}</p>
            <p><strong>Occupant 1 Phone Number:</strong> ${data['Occupant 1 phone number'] || 'N/A'}</p>
            <p><strong>Occupant 1 Relationship:</strong> ${data['Occupant 1 relationship'] || 'N/A'}</p>
            <p><strong>Occupant 1 Age:</strong> ${data['Occupant 1 age'] || 'N/A'}</p>
            <p><strong>Occupant 2 Name:</strong> ${data['Occupant 2 name'] || 'N/A'}</p>
            <p><strong>Occupant 2 Phone Number:</strong> ${data['Occupant 2 phone number'] || 'N/A'}</p>
            <p><strong>Occupant 2 Relationship:</strong> ${data['Occupant 2 relationship'] || 'N/A'}</p>
            <p><strong>Occupant 2 Age:</strong> ${data['Occupant 2 age'] || 'N/A'}</p>

            <h3>Co-applicant Status</h3>
            <p><strong>Co-applicant Status:</strong> ${data['Co-applicant status-No'] || 'N/A'}</p>
        </div>
    `;
};
