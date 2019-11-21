// JSON containing product data
var productData = {
  "li": [
    {
      "@class": "product-item",
      "img": {
        "@class": "product-image",
        "@src": "images/products/vitamin-a.jpg",
        "@alt": "Vitamin A - Product Photo"
      },
      "h2": {
        "@class": "product-name",
        "#text": "Vitamin A"
      }
    }
  ]
};

/*
// JSON containing product data
var productData = {
  "li": [
    {
      "image": "vitamin-a.jpg",
      "alt": "Vitamin A - Product Photo",
      "name": "Vitamin A"
    } ,
    {
      "image": "vitamin-bcomplex.jpg",
      "alt": "B Complex - Product Photo",
      "name": "B Complex"
    },
    {
      "image": "mineralwater-blueberry.jpg",
      "alt": "Blueberry Mineral Water - Product Photo",
      "name": "Blueberry Mineral Water"
    },
    {
      "image": "vitamin-c.jpg",
      "alt": "Vitamin C - Product Photo",
      "name": "Vitamin C"
    },
    {
      "image": "proteinbar-chocolate.jpg",
      "alt": "Protein Bar Chocolate - Product Photo",
      "name": "Chocolate Protein Bar"
    },
    {
      "image": "vitamin-calcium.jpg",
      "alt": "Vitamin Calcium - Product Photo",
      "name": "Calcium Vitamin"
    },
    {
      "image": "vitamin-d.jpg",
      "alt": "Vitamin D - Product Photo",
      "name": "Vitamin D"
    },
    {
      "image": "vitamin-flaxseed-oil.jpg",
      "alt": "Flaxseed Oil - Product Photo",
      "name": "Flaxseed Oil Vitamin"
    },
    {
      "image": "vitamin-iron.jpg",
      "alt": "Vitamin Iron - Product Photo",
      "name": "Iron Vitamin"
    },
    {
      "image": "mineralwater-lemonlime.jpg",
      "alt": "Mineral Water Lemon Lime - Product Photo",
      "name": "Lemon Lime Mineral Water"
    },
    {
      "image": "vitamin-magnesium.jpg",
      "alt": "Vitamin Magnesium - Product Photo",
      "name": "Magnesium Vitamin"
    },
    {
      "image": "vitamin-multi.jpg",
      "alt": "Vitamin Multivitamin - Product Photo",
      "name": "Multi-vitamin"
    },
    {
      "image": "proteinbar-peanutbutter.jpg",
      "alt": "Vitamin Protein Bar Peanut Butter - Product Photo",
      "name": "Peanut Butter Protein Bar"
    },
    {
      "image": "mineralwater-strawberry.jpg",
      "alt": "Mineral Water Strawberry - Product Photo",
      "name": "Strawberry Mineral Water"
    },
    {
      "image": "proteinbar-lemon.jpg",
      "alt": "Protein Bar Lemon - Product Photo",
      "name": "Lemon Protein Bar"
    },
    {
      "image": "mineralwater-orange.jpg",
      "alt": "Mineral Water Orange - Product Photo",
      "name": "Orange Mineral Water"
    },
    {
      "image": "mineralwater-peach.jpg",
      "alt": "Mineral Water Peach - Product Photo",
      "name": "Peach Mineral Water"
    },
    {
      "image": "mineralwater-raspberry.jpg",
      "alt": "Mineral Water Raspberry - Product Photo",
      "name": "Raspberry Mineral Water"
    }
  ]
};
*/

// JSON containing person data
var personData = {
  "cards": [
    {
      "img": {
        "src": "HenryTwill.jpg",
        "alt": "HenryTwill Photo"
      },
      "cardInfo": {
        "cardName": "Henry Twill, Jr",
        "cardTitle": "CEO"
      },
      "cardText": "Henry Twill Jr. is the <em>founder</em> and CEO of H+ Sports. Previously he was an <em>athletic trainer</em> working with several top athletes, making sure that they had the direction and proper coaching to keep them at the <em>top of their game</em>. Henry’s passion for finding natural alternatives led him to developing H+ Sport Multivitamins. The supplements <em>became a success</em> with his clients and led to the creation of H+ Sports."
    },
    {
      "img": {
        "src": "JessicaNewton.jpg",
        "alt": "JessicaNewton Photo"
      },
      "cardInfo": {
        "cardName": "Jessica Newton-Smith, MBA",
        "cardTitle": "CFO"
      },
      "cardText": "Jessica Newton-Smith joined us in 2012 and brings more than <em>10 years</em> of financial management experience to H+ Sports, spanning a variety of companies and industries ranging from <em> Fortune 500 agencies</em> to start-ups. She has extensive experience working in <em>emerging markets</em> and in the consumer and retail sectors."
    },
    {
      "img": {
        "src": "PhiTang.jpg",
        "alt": "PhiTang Photo"
      },
      "cardInfo": {
        "cardName": "Phi Tang, MBA",
        "cardTitle": "Director of Product Development"
      },
      "cardText": "Phi Tang joined H+ Sports in <em>2007</em> as Manager of Marketing Research. He was promoted to Director of Product Development in 2011. He has made <em>major contributions</em> to the discovery, development, and implementation of the H+ Sport product lines. Before joining the company he worked as a <em>scientific expert</em> and brings vast knowledge of ingredients and <em>new technologies</em>."
    },
    {
      "img": {
        "src": "MariaSontas.jpg",
        "alt": "MariaSontas Photo"
      },
      "cardInfo": {
        "cardName": "Maria Sontas",
        "cardTitle": "Director of Marketing"
      },
      "cardText": "Maria Sontas has been with H+ Sport since 2010. She oversees the company’s <em>marketing strategy</em> – ensuring advertising campaigns, social media initiatives, and events are planned to <em>position the company</em> strongly in a competitive marketplace. Maria is a <em>competing triathlete</em> and her passion for our products shows in her unique ability to drive awareness and <em>increase our presence</em> around the world."
    },
    {
      "img": {
        "src": "AngelaHaston.jpg",
        "alt": "AngelaHaston Photo"
      },
      "cardInfo": {
        "cardName": "Angela Hashton",
        "cardTitle": "Director of Sales"
      },
      "cardText": "Angela Hashton joined the company in 2009, to <em>initiate new relationships</em> for our growing line of H+ Sports active apparel. After being with the company for a year, she was promoted to Director of Sales. Angela is the drive behind the H+ Sport <em>ACTIVE product line</em> and has an uncanny ability to formulate strategies that have helped build our unified sales force. <em>Educating people</em> about health and nutrition is something that Angela holds dear."
    },
    {
      "img": {
        "src": "MichaelLewiston.jpg",
        "alt": "MichaelLewiston Photo"
      },
      "cardInfo": {
        "cardName": "Michael Lewiston, MFA",
        "cardTitle": "Creative Director"
      },
      "cardText": "Michael Lewiston is a multi-faceted <em>creative person</em> who began his career as a designer for a small business firm, while also working as an independent <em>painter and sculptor</em>. In 2007, Henry Twill was impressed by Michael’s creative work in a national ad campaign for a high profile sports apparel company. Henry approached Michael, and asked him to <em>manage creative direction</em> for the H+ Sport ACTIVE apparel line."
    }
  ]
};

var nullData = {};