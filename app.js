const menu = [
    {
      id: 1,
      title: "",
      category: "Club",
      img: "aug (1) (1).jpg",
      desc:`` ,
    },
    {
      id: 2,
      title: "",
      category: "Club",
      img: "aug (1).jpg",
      desc: `
      `,
    },
    {
      id: 3,
      title: "",
      category: "Club",
      img: "aug (2) (1).jpg",
      desc: ``,
    },
    {
      id: 4,
      title: "",
      category: "Club",
      img: "aug (2).jpg",
      desc: `
      `,
    },
    {
      id: 5,
      title: "",
      category: "Club",
      img: "aug (3).jpg",
      desc: ``,
    },
    {
      id: 6,
      title: "",
      category: "Professional",
      img: "aug (4).jpg",
      desc: ``,
    },
    {
      id: 7,
      title: "",
      category: "Professional",
      img: "aug.jpg",
      desc: ``,
    },
    {
      id: 8,
      title: "",
      category: "Professional",
      img: "IMG_20210805_215743.jpg",
      desc: ``,
    },
    {
      id: 9,
      title: "",
      category: "Professional",
      img: "IMG_20210805_220318.jpg",
      desc: ``,
    },
    {
      id: 10,
      title: "",
      category: "Professional",
      img: "IMG-20210803-WA0019.jpg",
      desc: ``,
    },
    {
      id: 11,
      title: "",
      category: "International",
      img: "mill-recom.jpg",
      desc: ``,
    },
    {
      id: 12,
      title: "",
      category: "International",
      img: "Mill-recommends.jpg",
      desc: ``,
    },
    {
      id: 13,
      title: "",
      category: "Community",
      img: "origin.jpg",
      desc: ``,
    },
    {
      id: 14,
      title: "",
      category: "Community",
      img: "SAVE_20210805_220253.jpg",
      desc: ``,
    },
    {
      id: 15,
      title: "",
      category: "Community",
      img: "Screenshot (75).png",
      desc: ``,
    },
  
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  const brandContainer=document.queryCommandValue(".brad-cont")
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      if(item.id%2===0)
      {
      return `
      
      <div class="car" data-aos="fade-right" data-aos-delay="100" >
      <div class="circle"></div>
      <div class="content" data-name="${item.id}">   
                           
                           
                                <h3 >${item.title}</h3>
                                <h4 style="text-transform:none;color:#ff0000;padding-top:1rem;justify-content-center; ">${item.desc} </h4>

           </div>                 
           <img src=${item.img} width="300" height="300"  style="border-radius:3rem;">       
          </div>
          `;
      }
      else{ return`
      
      <div class="car" data-aos="fade-left" data-aos-delay="100" >
      <div class="circle"></div>
      <div class="content" data-name="${item.id}">   
                           
                           
                                <h3 >${item.title}</h3>
                                <h4 style="text-transform:none;color:#ff0000;padding-top:1rem;justify-content-center; ">${item.desc} </h4>

           </div>                 
           <img src=${item.img} width="300" height="300"  style="border-radius:3rem;">             
          </div>`
        
                
          ;

      }
    
    
    });
    
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  
  function displayMenuButtons(){
    const categories = menu.reduce(
      function(values,item){
        if (!values.includes(item.category)){
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
  const categoryBtns = categories
   .map(function(category){
     return `<button type="button" class="filter-btn" data-id=${category}>
     ${category}
     </button>`
  
   })
  .join("");
  
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn){
    btn.addEventListener("click",function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory =menu.filter(function(menuItem){
        if (menuItem.category === category){
          return menuItem;
        }
      });
     
      if (category === "all")
      {
        diplayMenuItems(menu);
      }
      else{
        diplayMenuItems(menuCategory);
      }
    });
    
  });
  }
  
