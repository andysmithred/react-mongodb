// Link to i* website
// https://icons8.com/icon/set/manager/ios-glyphs

export const ImageDetails = {
    iconsPath: "../../../src/assets/icons/",
    leadersPath: "../../../src/assets/leaders/",
    civilizationsPath: "../../../src/assets/civilizations/",
    attributesPath: "../../../src/assets/attributes/",
    civicsPath: "../../../src/assets/civics/",
    technologiesPath: "../../../src/assets/technologies/",
    buildingsPath: "../../../src/assets/buildings/",
    wondersPath: "../../../src/assets/wonders/",
    unitsPath: "../../../src/assets/units/",
    tagsPath: "../../../src/assets/tags/",
    icons: [
        {
            name: "home",
            path: "home.png"
        },
        {
            name: "info",
            path: "info.png"
        },
        {
            name: "units",
            path: "units.png"
        },
        {
            name: "leaders",
            path: "leaders.png"
        },
        {
            name: "civilizations",
            path: "civilizations.png"
        },
        {
            name: "civics",
            path: "civics.png"
        },
        {
            name: "technologies",
            path: "technologies.png"
        },
        {
            name: "buildings",
            path: "buildings.png"
        },
        {
            name: "wonders",
            path: "wonders.png"
        }
    ],
    attributes: [
        {
            name: "Cultural",
            path: "cultural.webp",
            colour: "rgba(128, 0, 128, 0.5)"
        },
        {
            name: "Scientific",
            path: "scientific.webp",
            colour: "rgba(0, 255, 255, 0.5)"
        },
        {
            name: "Economic",
            path: "economic.webp",
            colour: "rgba(255, 165, 0, 0.5)"
        },
        {
            name: "Militaristic",
            path: "militaristic.webp",
            colour: "rgba(255, 0, 0, 0.5)"
        },
        {
            name: "Expansionist",
            path: "expansionist.webp",
            colour: "rgba(0, 255, 0, 0.5)"
        },
        {
            name: "Diplomatic",
            path: "diplomatic.webp",
            colour: "rgba(0, 0, 255, 0.5)"
        },
        {
            name: "Wildcard",
            path: "wildcard.webp",
            colour: "rgba(128, 128, 128, 0.5)"
        }
    ],
    tags: [
        {
            name: "Gold",
            icon: "Yield_Gold_29.webp",
        },
        {
            name: "Fortification",
            icon: "Fortified_District_29.webp",
        },
        {
            name: "Combat",
            icon: "Combat_Strength.webp",
        },
        {
            name: "Influence",
            icon: "Influence.webp",
        },
        {
            name: "Culture",
            icon: "Yield_Culture_29.webp",
        },
        {
            name: "Food",
            icon: "Yield_Food_29.webp",
        },
        {
            name: "Production",
            icon: "Yield_Production_29.webp",
        },
        {
            name: "Science",
            icon: "Yield_Science_29.webp",
        },
        {
            name: "Happiness",  
            icon: "Yield_Happiness_29.webp",
        },
        {
            name: "Specialist",
            icon: "Specialist_29.webp",
        },
        {
            name: "Resource",
            icon: "Resource_29.webp",
        },
        {
            name: "Attribute",
            icon: "Attribute_29.webp",
        },
        {
            name: "Great Work",
            icon: "Great_Work_29.webp",
        },
        {
            name: "Trade Route",
            icon: "Trade_Route_29.webp",
        },
        {
            name: "Movement",
            icon: "Movement_29.webp",
        },
        {
            name: "Settlement Limit",
            icon: "Settlement_Limit_29.webp",
        }
    ],
    // TODO:AS -> possibly remove
    leaders: [
        {
            name: "Amina",
            icon: "leaders/Amina_29.webp",
            colour: "rgba(128, 128, 128, 0.5)"
        },
    ]
}

export const getImage = (name) =>
  ImageDetails.icons.find((icon) => icon.name === name);

export const getIconPath = (name) =>
  ImageDetails.iconsPath + (getImage(name) ? getImage(name).path : getImage('home').path);

export const getAttribute = (name) =>
  ImageDetails.attributes.find((attribute) => attribute.name.toUpperCase() === name.toUpperCase());

export const getAttributePath = (name) =>
  ImageDetails.attributesPath + (getAttribute(name) ? getAttribute(name).path : getAttribute('wildcard').path);

export const getAttributeColour = (name) =>
  ImageDetails.attributes.find((attribute) => attribute.name.toUpperCase() === name.toUpperCase()).colour;

export const getTag = (name) =>
  ImageDetails.tags.find((tag) => tag.name.toUpperCase() === name.toUpperCase());

export const getTagPath = (name) =>
  ImageDetails.tagsPath + (getTag(name) ? getTag(name).icon : getTag('Gold').icon);
