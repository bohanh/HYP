/*
DATABASE INITIALIZATION
DO NOT RUN MULTIPLE TIMES
 */

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // TestimonialPerson INIT
    // await prisma.testimonialPerson.createMany({
    //     data: [
    //         {id: 101, name: 'Maria G.'},
    //         {id: 102, name: 'Elena P.'},
    //         {id: 103, name: 'Giulia R.'},
    //         {id: 104, name: 'Lucia M.'},
    //         {id: 105, name: 'Sophia T.'},
    //         {id: 106, name: 'Francesca D.'},
    //         {id: 107, name: 'Anna B.'},
    //         {id: 108, name: 'Laura V.'},
    //         {id: 109, name: 'Maria S.'},
    //         {id: 110, name: 'Maria L.'},
    //         {id: 111, name: 'Elena P.'},
    //         {id: 112, name: 'Giulia R.'},
    //         {id: 113, name: 'Laura B.'},
    //         {id: 114, name: 'Sara T.'},
    //         {id: 115, name: 'Alessandra M.'},
    //         {id: 116, name: 'Francesca L.'},
    //         {id: 117, name: 'Marta G.'},
    //         {id: 118, name: 'Isabella P.'}
    //     ]
    // })

    // Person INIT
    // await prisma.person.createMany({
    //     data: [
    //         {
    //             id: 1,
    //             name: "Dr. Enrico BIanchi",
    //             description: "Experienced Clinical Psychologist with over 10 years of expertise in diagnosing and treating mental health issues. Proficient in cognitive-behavioral therapy, psychoanalysis, and developing personalized treatment plans for patients. Strong background in both inpatient and outpatient settings.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 2,
    //             name: "Dr. Jane Doe",
    //             description: "Dedicated Child Psychologist with 8 years of experience in providing therapeutic services to children and adolescents. Specializes in developmental psychology, play therapy, and family counseling. Committed to supporting young clients in overcoming emotional and behavioral challenges.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 3,
    //             name: "Dr. Mohamed Rabas",
    //             description: "Accomplished Forensic Psychologist with 12 years of experience in criminal and civil cases. Expert in psychological evaluations, competency assessments, and expert witness testimony. Known for providing thorough and objective analyses in legal contexts.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 4,
    //             name: "Dr. Emma Rizzi",
    //             description: "Health Psychologist with 9 years of experience in promoting physical health through psychological principles. Expertise in behavioral medicine, chronic illness management, and health behavior change. Dedicated to improving patient outcomes through evidence-based interventions.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 5,
    //             name: "Dr. Lucia Moretti",
    //             description: "Dedicated Clinical Psychologist with over 12 years of experience in providing therapeutic services and emotional support to women experiencing violence and family maltreatment. Specializes in trauma-informed care, cognitive-behavioral therapy, and crisis intervention.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 6,
    //             name: "Dr. Marco Conti",
    //             description: "Compassionate Counseling Psychologist with 10 years of experience providing emotional and psychological support to women dealing with family maltreatment and domestic violence. Expertise in humanistic therapy, family counseling, and stress management.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 7,
    //             name: "Dr. Elena Ricci",
    //             description: "Experienced Health Psychologist with over 8 years of expertise in providing therapeutic services and emotional support to women facing violence and family maltreatment. Specialized in mindfulness-based stress reduction, trauma therapy, and health behavior change.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 8,
    //             name: "Avv. Maria Rossi",
    //             description: "Dedicated Legal Advisor with over 15 years of experience in providing comprehensive legal support and advocacy for women facing domestic violence and family maltreatment. Expert in family law, criminal law related to violence against women, and human rights.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 9,
    //             name: "Avv. Luigi Bianchi",
    //             description: "Experienced Legal Advisor with a robust background in providing legal assistance to women in crisis situations, particularly those affected by domestic violence and family maltreatment. Proficient in criminal defense, protective measures, and family law.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 10,
    //             name: "Anna Bianchi",
    //             description: "Experienced Case Manager with over 8 years of expertise in coordinating services and resources for women in crisis, particularly those affected by domestic violence and family maltreatment. Skilled in needs assessment, resource coordination, and individualized service planning.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 11,
    //             name: "Giovanni Cadorna",
    //             description: "Dedicated Case Manager with 10 years of experience in coordinating comprehensive support services for women facing domestic violence and family maltreatment. Expertise in client advocacy, crisis management, and inter-agency collaboration.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 12,
    //             name: "Sofia Russo",
    //             description: "Proactive Case Manager with over 7 years of experience in supporting women through coordinating essential services and resources. Specialized in crisis intervention, holistic care planning, and empowering women to regain control over their lives.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 13,
    //             name: "Laura Verdi",
    //             description: "Detail-oriented Administrative Assistant with over 7 years of experience managing day-to-day operations in a non-profit setting. Proficient in scheduling, data management, and communication, ensuring efficient and smooth administrative functions.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 14,
    //             name: "Marco Lanza",
    //             description: "Experienced Administrative Coordinator with over 10 years of experience in managing administrative functions within non-profit organizations. Expertise in data management, scheduling, and enhancing internal communication to support efficient operations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 15,
    //             name: "Giulia Romano",
    //             description: "Compassionate Registered Nurse with over 10 years of experience in providing medical care and health education in clinical and non-profit settings. Skilled in patient assessment, wound care, and health education, with a focus on supporting women in crisis.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 16,
    //             name: "Andrea Esposito",
    //             description: "Dedicated Healthcare Worker with over 8 years of experience in providing medical care and health education in non-profit organizations. Specializes in preventive health, patient education, and supporting women in vulnerable situations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 17,
    //             name: "Sara Ascoli",
    //             description: "Dedicated Childcare Worker with over 8 years of experience providing nurturing care and creating safe environments for children. Skilled in early childhood education, behavioral management, and fostering emotional and social development.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 18,
    //             name: "Luca Verdi",
    //             description: "Caring and responsible Childcare Worker with 6 years of experience in providing high-quality care for children. Specializes in creating safe and stimulating environments that support children’s physical, emotional, and social well-being.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 19,
    //             name: "Sofia Esposito",
    //             description: "Nurturing and skilled Childcare Worker with over 9 years of experience in providing care for children. Expertise in early childhood education, creating engaging activities, and ensuring a safe and supportive environment for children.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 20,
    //             name: "Elena Ferri",
    //             description: "Experienced Social Worker with over 10 years of experience providing support and navigating social services for individuals in need. Specializes in assisting women affected by domestic violence and family maltreatment.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //         {
    //             id: 21,
    //             name: "Matteo Ricci",
    //             description: "Compassionate Social Worker with 8 years of experience in supporting individuals through social services navigation and personalized assistance. Expertise in crisis intervention, resource coordination, and advocacy for women in difficult situations.",
    //             linkedin: "",
    //             twitter: "",
    //             instagram: "",
    //             facebook: ""
    //         },
    //     ]
    // })

    // Experience INIT
    // await prisma.experience.createMany({
    //     data: [
    //         {personId: 1, title: "Senior Clinical Psychologist", location: "XYZ Mental Health Center, Milano, MI", time: "January 2015 - Present", description: "Conduct psychological assessments and diagnoses.\nDevelop and implement individualized treatment plans.\nProvide psychotherapy for individuals, couples, and families.\nSupervise and mentor junior psychologists and interns."},
    //         {personId: 1, title: "Clinical Psychologist", location: "ABC Hospital, Milano, MI", time: "June 2010 - December 2014", description: "Administered psychological tests and interpreted results.\nConducted individual and group therapy sessions.\nParticipated in multidisciplinary treatment team meetings."},
    //         {personId: 2, title: "Child Psychologist", location: "Sunshine Children’s Hospital, Milano, MI", time: "March 2015 - Present", description: "Conduct psychological evaluations of children and adolescents.\nImplement play therapy and cognitive-behavioral techniques.\nCollaborate with families and schools to create supportive environments."},
    //         {personId: 2, title: "Child Therapist", location: "Happy Minds Therapy Center, Pavia, PV", time: "September 2012 - February 2015", description: "Provided individual and group therapy for children.\nAddressed issues such as anxiety, depression, and ADHD.\nDeveloped treatment plans and monitored progress."},
    //         {personId: 3, title: "Forensic Psychologist", location: "State Forensic Services, Milano, MI", time: "August 2008 - Present", description: "Conduct forensic evaluations for criminal and civil cases.\nAssess competency to stand trial and criminal responsibility.\nProvide expert witness testimony in court."},
    //         {personId: 3, title: "Consulting Forensic Psychologist", location: "Private Practice, New York, NY", time: "January 2012 - Present", description: "Offer consultations to attorneys on psychological aspects of cases.\nPerform custody evaluations and risk assessments.\nDevelop reports and provide testimony."},
    //         {personId: 4, title: "Health Psychologist", location: "Wellness Health Center, Milano, MI", time: "January 2012 - Present", description: "Conduct behavioral assessments and develop treatment plans.\nProvide counseling for patients with chronic illnesses.\nImplement health promotion and disease prevention programs."},
    //         {personId: 4, title: "Behavioral Medicine Specialist", location: "Hope Medical Clinic, Vicenza, VC", time: "July 2011 - December 2011", description: "Assisted patients in managing chronic pain and illness.\nConducted workshops on stress management and healthy living.\nCollaborated with medical staff to provide integrated care."},
    //         {personId: 5, title: "Clinical Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "March 2015 - Present", description: "Conduct individual and group therapy sessions for women affected by domestic violence.\nProvide crisis intervention and develop personalized treatment plans.\nFacilitate support groups and workshops focused on trauma recovery and empowerment."},
    //         {personId: 5, title: "Therapist", location: "Associazione Donne in Rete, Milan, Italy", time: "January 2010 - February 2015", description: "Offered emotional support and counseling services to women in shelters.\nCollaborated with social workers to provide holistic care.\nConducted psychological assessments and therapeutic interventions."},
    //         {personId: 6, title: "Counseling Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "April 2016 - Present", description: "Provide individual counseling sessions to women in crisis.\nFacilitate family counseling and mediation sessions.\nDevelop and conduct stress management and resilience-building workshops."},
    //         {personId: 6, title: "Counselor", location: "Fondazione Aiuto Donna, Rome, Italy", time: "June 2011 - March 2016", description: "Offered support and counseling to women in emergency situations.\nConducted workshops on self-esteem and empowerment.\nWorked with multidisciplinary teams to create comprehensive support plans."},
    //         {personId: 7, title: "Health Psychologist", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "January 2017 - Present", description: "Offer individual and group therapy focusing on trauma recovery.\nImplement mindfulness-based stress reduction programs.\nProvide health behavior change counseling and wellness planning."},
    //         {personId: 7, title: "Therapist", location: "Associazione Aiuto Donna, Florence, Italy", time: "May 2012 - December 2016", description: "Provided therapeutic services to women in domestic violence shelters.\nDeveloped and facilitated trauma-informed care workshops.\nConducted psychological evaluations and created individualized care plans."},
    //         {personId: 8, title: "Senior Legal Advisor", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "January 2015 - Present", description: "Provide legal counsel and representation for women victims of violence.\nAssist clients in understanding their legal rights and options.\nWork with local authorities and social services to ensure comprehensive support."},
    //         {personId: 8, title: "Legal Consultant", location: "Associazione Difesa Donne, Milan, Italy", time: "June 2010 - December 2014", description: "Offered legal advice on issues related to family law and protection orders.\nConducted workshops on legal rights and self-defense for women.\nCollaborated with psychologists and social workers to develop support plans."},
    //         {personId: 8, title: "Family Law Attorney", location: "Studio Legale Rossi, Milan, Italy", time: "January 2005 - May 2010", description: "Specialized in cases of domestic violence and child custody disputes.\nRepresented clients in court and mediation sessions.\nDrafted legal documents such as restraining orders and custody agreements."},
    //         {personId: 9, title: "Legal Advisor", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2016 - Present", description: "Offer legal consultations to women victims of violence.\nAssist clients in navigating legal procedures and obtaining protection orders.\nLiaise with law enforcement and social services to coordinate comprehensive support."},
    //         {personId: 9, title: "Legal Advocate", location: "Associazione Difesa dei Diritti delle Donne, Rome, Italy", time: "July 2011 - January 2016", description: "Provided legal representation in cases of domestic violence.\nConducted legal rights education sessions for women in shelters.\nWorked closely with social workers to ensure holistic care for clients."},
    //         {personId: 9, title: "Criminal Defense Attorney", location: "Studio Legale Bianchi, Rome, Italy", time: "March 2005 - June 2011", description: "Defended clients in criminal cases, with a focus on domestic violence.\nPrepared legal briefs, motions, and case strategies.\nRepresented clients in court hearings and negotiations."},
    //         {personId: 10, title: "Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "March 2016 - Present", description: "Conduct comprehensive needs assessments for women in crisis.\nDevelop and implement individualized service plans.\nCoordinate with local agencies and service providers to ensure holistic support.\nMonitor and evaluate the progress of each client, adjusting plans as necessary."},
    //         {personId: 10, title: "Social Worker", location: "Associazione Casa delle Donne, Milan, Italy", time: "June 2012 - February 2016", description: "Provided case management and support services to women and children in shelters.\nAssisted clients in accessing community resources such as housing, healthcare, and legal assistance.\nFacilitated support groups and workshops on life skills and self-empowerment."},
    //         {personId: 11, title: "Senior Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2014 - Present", description: "Lead a team of case managers in providing support to women in crisis.\nDevelop and coordinate individualized care plans.\nFacilitate access to housing, legal, medical, and psychological services.\nConduct regular follow-ups to ensure the effectiveness of service delivery."},
    //         {personId: 11, title: "Case Coordinator", location: "Fondazione Aiuto Donna, Rome, Italy", time: "July 2009 - January 2014", description: "Managed cases for women and children in domestic violence shelters.\nCoordinated with local authorities, healthcare providers, and legal services.\nOrganized workshops and training sessions on resource utilization and self-sufficiency."},
    //         {personId: 12, title: "Case Manager", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "April 2017 - Present", description: "Perform initial and ongoing needs assessments.\nCreate and manage individualized service plans.\nConnect clients with necessary resources, including housing, healthcare, and legal aid.\nProvide ongoing support and advocacy for clients."},
    //         {personId: 12, title: "Support Services Coordinator", location: "Associazione Aiuto e Speranza, Florence, Italy", time: "August 2013 - March 2017", description: "Coordinated support services for women and children in emergency shelters.\nOrganized community outreach programs to raise awareness of available services.\nFacilitated group sessions and workshops on empowerment and self-sufficiency."},
    //         {personId: 13, title: "Administrative Assistant", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "May 2017 - Present", description: "Handle scheduling and calendar management for the center’s activities.\nMaintain and update client databases and confidential records.\nCoordinate communication between staff, clients, and external partners.\nAssist in organizing events, workshops, and meetings."},
    //         {personId: 13, title: "Office Administrator", location: "Associazione Aiuto Donna, Milan, Italy", time: "June 2013 - April 2017", description: "Managed day-to-day office operations, including phone and email communication.\nScheduled appointments and managed the center's calendar.\nOrganized and maintained physical and electronic files.\nAssisted in preparing reports and documents for internal and external use."},
    //         {personId: 14, title: "Administrative Coordinator", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "January 2015 - Present", description: "Oversee the administrative operations, including scheduling and data management.\nCoordinate internal and external communications, ensuring timely information flow.\nManage client intake and maintain accurate and confidential records.\nSupport the planning and execution of events and programs."},
    //         {personId: 14, title: "Office Manager", location: "Fondazione Aiuto e Solidarietà, Rome, Italy", time: "March 2010 - December 2014", description: "Supervised daily office operations, including staff scheduling and task management.\nMaintained databases and ensured data integrity and confidentiality.\nFacilitated communication between departments and external stakeholders.\nOrganized and coordinated meetings, workshops, and training sessions."},
    //         {personId: 15, title: "Registered Nurse", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "April 2016 - Present", description: "Provide direct medical care to women affected by domestic violence.\nConduct health assessments and develop individualized care plans.\nEducate clients on health issues, self-care, and preventive measures.\nCollaborate with multidisciplinary teams to ensure comprehensive care."},
    //         {personId: 15, title: "Staff Nurse", location: "Ospedale San Raffaele, Milan, Italy", time: "January 2011 - March 2016", description: "Provided nursing care in a busy emergency department.\nAssisted in triage, patient assessment, and emergency interventions.\nEducated patients and families on post-discharge care and health maintenance.\nMaintained accurate medical records and ensured patient confidentiality."},
    //         {personId: 16, title: "Healthcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "February 2017 - Present", description: "Provide basic medical care and first aid to women at the center.\nConduct health screenings and monitor vital signs.\nEducate clients on nutrition, hygiene, and preventive health measures.\nSupport healthcare professionals in delivering comprehensive care."},
    //         {personId: 16, title: "Community Health Worker", location: "Fondazione Salute e Benessere, Rome, Italy", time: "August 2013 - January 2017", description: "Provided health education and outreach services to underserved communities.\nAssisted in organizing health fairs and community health screenings.\nEducated individuals on chronic disease management and preventive health.\nCollaborated with local health agencies to connect clients with resources."},
    //         {personId: 17, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "June 2016 - Present", description: "Provide daily care and supervision for children of women at the center.\nDevelop and implement age-appropriate activities to promote learning and development.\nEnsure a safe and supportive environment for all children.\nCommunicate effectively with mothers to support their children’s needs."},
    //         {personId: 17, title: "Preschool Teacher Assistant", location: "Scuola dell'Infanzia Arcobaleno, Milan, Italy", time: "September 2012 - May 2016", description: "Assisted lead teachers in the classroom with educational and recreational activities.\nSupported children in developing social and cognitive skills.\nMaintained a clean and organized classroom environment.\nMonitored children's progress and reported to parents and teachers."},
    //         {personId: 18, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "January 2018 - Present", description: "Supervise and engage children in various activities to ensure their safety and well-being.\nPlan and organize educational and recreational activities.\nProvide emotional support and guidance to children.\nWork closely with mothers to address any concerns about their children."},
    //         {personId: 18, title: "After-School Program Coordinator", location: "Associazione Bambini Felici, Rome, Italy", time: "September 2015 - December 2017", description: "Coordinated and supervised after-school programs for elementary school children.\nDeveloped and implemented engaging activities focused on learning and development.\nManaged program logistics, including scheduling and communication with parents.\nEnsured the safety and well-being of all participants."},
    //         {personId: 19, title: "Childcare Worker", location: "Centro di Supporto per Donne in Difficoltà, Florence, Italy", time: "March 2015 - Present", description: "Provide attentive and compassionate care to children of women at the center.\nDesign and implement educational and recreational activities.\nMonitor children's safety and well-being at all times.\nCommunicate with mothers to ensure their children’s needs are met."},
    //         {personId: 19, title: "Nursery School Assistant", location: "Asilo Nido Bimbi Sereni, Florence, Italy", time: "April 2011 - February 2015", description: "Assisted in caring for infants and toddlers in a nursery school setting.\nSupported children's development through interactive play and activities.\nMaintained a clean and organized environment.\nProvided regular updates to parents on their children’s progress."},
    //         {personId: 20, title: "Social Worker", location: "Centro di Supporto per Donne in Difficoltà, Milan, Italy", time: "February 2014 - Present", description: "Provide comprehensive support to women in crisis, helping them access social services and resources.\nConduct assessments to determine clients’ needs and develop individualized support plans.\nCollaborate with local agencies and service providers to ensure holistic support.\nOffer counseling and emotional support to clients."},
    //         {personId: 20, title: "Case Manager", location: "Associazione Aiuto Donna, Milan, Italy", time: "April 2010 - January 2014", description: "Managed cases for women and families in shelters.\nAssisted clients in accessing housing, healthcare, and legal assistance.\nConducted home visits and follow-ups to ensure the well-being of clients.\nFacilitated support groups and workshops on self-empowerment."},
    //         {personId: 21, title: "Social Worker", location: "Centro di Supporto per Donne in Difficoltà, Rome, Italy", time: "May 2016 - Present", description: "Assist women in crisis by providing access to essential social services and resources.\nPerform comprehensive needs assessments and create tailored support plans.\nCoordinate with community organizations and government agencies to facilitate service delivery.\nOffer counseling and support to clients experiencing emotional and psychological distress."},
    //         {personId: 21, title: "Social Services Coordinator", location: "Fondazione Aiuto e Speranza, Rome, Italy", time: "September 2012 - April 2016", description: "Coordinated social services for families and individuals in need.\nConducted client intake interviews and assessments.\nDeveloped and monitored individualized service plans.\nProvided information and referrals to community resources and support programs."},
    //     ]
    // })

    // Project INIT
    await prisma.project.createMany({
        data: [
            {id: 1, name: "EmpowerHer", description: "A Global Initiative for Empowerment and Change", longDes: "EmpowerHer is a grassroots initiative spearheaded by dedicated women activists and community leaders across various countries. The project is focused on empowering women and girls who have experienced gender-based violence, providing them with the tools and support they need to rebuild their lives. Through mentorship programs, skill-building workshops, and advocacy campaigns, EmpowerHer aims to create a strong network of support for survivors and to shift societal attitudes towards gender-based violence.", leaderId: 20},
            {id: 2, name: "Safe Haven", description: "A Sanctuary for Survivors of Domestic Violence", longDes: "Safe Haven is a collaborative initiative uniting local government agencies, non-governmental organizations (NGOs), and community organizations with a common goal: to provide safe housing and comprehensive support services to survivors of domestic violence. This project not only ensures a secure environment for survivors but also focuses on training law enforcement and healthcare professionals to better identify and respond to cases of gender-based violence.", leaderId: 14},
            {id: 3, name: "Women's Voices", description: "Empowering and Inspiring Through Shared Experiences", longDes: "Women's Voices: Inspiring Change is an annual event dedicated to providing a dynamic platform for influential and successful women to share their insights, experiences, and expertise on various issues affecting women and society. This project aims to inspire and empower individuals, particularly women, by showcasing the diverse achievements and perspectives of female leaders from different fields. Through engaging talks, panel discussions, and interactive sessions, the event fosters a spirit of resilience, leadership, and community among its participants.", leaderId: 8},
            {id: 4, name: "Justice for Women", description: "Ensuring Legal Representation and Access to Justice", longDes: "Justice for Women is a dedicated legal advocacy project focused on providing free legal representation to women and girls who have experienced gender-based violence. This project collaborates with pro bono lawyers, law clinics, and legal aid organizations to ensure that survivors have access to justice and can hold perpetrators accountable for their actions. By offering comprehensive legal support, Justice for Women empowers survivors to pursue justice and reclaim their lives with dignity.", leaderId: 8},
            {id: 5, name: "Project RISE", description: "Empowering Survivors of Human Trafficking", longDes: "Project RISE (Resilience, Integration, Support, and Empowerment) is a transformative initiative dedicated to supporting survivors of human trafficking, with a particular focus on women and children. Funded by a combination of governmental and non-governmental organizations, Project RISE offers a comprehensive suite of services designed to help survivors rebuild their lives with dignity and hope.", leaderId: 10},
        ]
    })

}

main().then(async () => {
    await prisma.$disconnect()
})
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })