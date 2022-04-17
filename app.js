const menu = [
    {
      id: 1,
      title: "",
      category: "Club",
      img: "img1.jpg",
      desc:`` ,
    },
    {
      id: 2,
      title: "",
      category: "Club",
      img: "img2.jpg",
      desc: `
      `,
    },
    {
      id: 3,
      title: "",
      category: "Club",
      img: "img3.jpg",
      desc: ``,
    },
    {
      id: 4,
      title: "",
      category: "Club",
      img: "img4.jpg",
      desc: `
      `,
    },
    {
      id: 5,
      title: "",
      category: "Club",
      img: "img5.jpg",
      desc: ``,
    },
    {
      id: 6,
      title: "",
      category: "Professional",
      img: "img6.jpg",
      desc: ``,
    },
    {
      id: 7,
      title: "",
      category: "Professional",
      img: "img7.jpg",
      desc: ``,
    },
    {
      id: 8,
      title: "",
      category: "Professional",
      img: "img8.jpg",
      desc: ``,
    },
    {
      id: 9,
      title: "",
      category: "Professional",
      img: "img9.jpg",
      desc: ``,
    },
    {
      id: 10,
      title: "",
      category: "International",
      img: "img10.jpg",
      desc: ``,
    },
    {
      id: 11,
      title: "",
      category: "International",
      img: "img11.jpg",
      desc: ``,
    },
    {
      id: 12,
      title: "",
      category: "International",
      img: "img12.jpg",
      desc: ``,
    },
    {
      id: 13,
      title: "",
      category: "Community",
      img: "img13.jpg",
      desc: ``,
    },
    {
      id: 14,
      title: "",
      category: "Community",
      img: "img14.jpg",
      desc: ``,
    },
    {
      id: 15,
      title: "",
      category: "Community",
      img: "img15.png",
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
  
