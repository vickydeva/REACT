import React from "react";
import ReactDOM from "react-dom/client";
/**
 * * header
 *    * logo,search, navbar
 * * body
 *    * cards container
 *      * res. cards
 * *footer
 *    * copyright, about us, contacts, social links.
 *
 *
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

// * creating res-props:
const RestaurantProperties = resvalue => {
  const { resData } = resvalue;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h2>{resData.info.name}</h2>
      <p>{resData.info.costForTwo}</p>
      <p>{resData.info.cuisines.join(", ")}</p>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "806891",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/6794939c-69b9-41df-a948-ede00ce18637_806891.jpg",
      locality: "Anna Salai",
      areaName: "Triplicane",
      costForTwo: "₹350 for two",
      cuisines: ["pizza", "mozirolo-cheese-pizza"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-13 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹189",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-dec59295-7a13-4f23-88a5-7ea5f9752348",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/pizza-hut-anna-salai-triplicane-rest806891",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "708880",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/8ba01310-e5b7-4a90-bef3-98a10bc91238_708880.JPG",
      locality: "Sydenhams Road",
      areaName: "Periyampet",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-dec59295-7a13-4f23-88a5-7ea5f9752348",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/kfc-sydenhams-road-periyampet-rest708880",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "453068",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Express Avenue",
      areaName: "Royapettah",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-12 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-dec59295-7a13-4f23-88a5-7ea5f9752348",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chinese-wok-express-avenue-royapettah-rest453068",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "785200",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e38fb951-1a23-422d-a56a-65d79500bcb9_785200.jpg",
      locality: "Whites Road",
      areaName: "Express Avenue",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "431",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-12 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-dec59295-7a13-4f23-88a5-7ea5f9752348",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/theobroma-whites-road-express-avenue-rest785200",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "95159",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/b89a0aac-36f9-4f51-9c6c-b5eb5c8355b0_95159.jpg",
      locality: "Bharathi Salai",
      areaName: "Triplicane",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "4925",
      avgRatingString: "4.3",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            description: "Delivery!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-dec59295-7a13-4f23-88a5-7ea5f9752348",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/lunchbox-meals-and-thalis-bharathi-salai-triplicane-rest95159",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// * Creating Header Component.
const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <img
          className="img-logo"
          alt="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="search-bar">
        <h2>TheFoodApp</h2>
        <input
          type="text"
          className="input"
          placeholder="search for food"
        ></input>
        <button className="btn-search">Search</button>
      </div>
      <div className="nav-items">
        <ul>
          <li>LogIn</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resList.map(restaurantinresList => (
          <RestaurantProperties
            key={restaurantinresList.info.id}
            resData={restaurantinresList}
          />
        ))}
        {/* <RestaurantProperties resData={resList[1]} />
        <RestaurantProperties resData={resList[2]} />
        <RestaurantProperties resData={resList[3]} /> */}
        {/* <RestaurantProperties resData={resList[4]} />
        <RestaurantProperties resData={resList[5]} />
        <RestaurantProperties resData={resList[6]} /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
