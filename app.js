const menu = [
    {
      id: 1,
      title: "video door phones",
      category: "Club",
      img: "./images/item-1.jpg",
      desc:`Peofessional entry security systems with IP intercom, video, and access control using Biometrics. Greet Visitors and unlock a door, Away / Stay mode settings, Emergency Alarm, Event Notice Function Store Visitor Image.` ,
    },
    {
      id: 2,
      title: "camera security",
      category: "Club",
      img: "./images/item-2.jpg",
      desc: `Security cameras provide you with a way to monitor and record activity on your property and the surrounding areas as well as letting people know you're serious about Club security With a DVR, you can record and store several days worth of surveillance video from your security camera system for later review or permanent recording.
      `,
    },
    {
      id: 3,
      title: "Club networking",
      category: "Club",
      img: "./images/item-3.jpg",
      desc: `PCT Club networking enables residential local area network (LAN) for communicating various digital devices usually personal computers, Notebooks, and accessories, such as printers and mobile computing devices. We establish both wired and wireless connections seamlessly to connect various AV Gadgets with Computers devices.`,
    },
    {
      id: 4,
      title: "alarm systems",
      category: "Club",
      img: "./images/item-4.jpg",
      desc: `Club alarm systems are configured with Panic Buttons. These are located throughout the house and will alert the emergency personnel when activated. Glass break detectors in Club alarm systems will allow the Clubowner know when any glass has been broken in the windows throughout the Club
      `,
    },
    {
      id: 5,
      title: "a/v solutions",
      category: "Club",
      img: "./images/item-5.jpg",
      desc: `PCT A/V Solutions are made-to-order home theaters, tailored to each client's specifications. You will not receive a "theater-in-a-box", but instead a one-of-a-kind custom design. Every Theater is designed and engineered by a team of talented designers specialized in home theaters and hand crafted by a team of artisans`,
    },
    {
      id: 6,
      title: "HVAC",
      category: "Peofessional",
      img: "./images/item-11.jpg",
      desc: `Through PCT-backed solutions optimize the quality of Heating, Ventilation & Air-conditioning for the residents of your Peofessional for a Healthy Living. Conveniently control and monitor the HVAC from keypads and touch panels as part of a complete environmental control solution.`,
    },
    {
      id: 7,
      title: "solar panels",
      category: "Peofessional",
      img: "./images/item-12.jpg",
      desc: `With Power-crisis looming as ever, PCT provides affordable Solar Energy solutions for uninterrupted power supply The outcome is reliable and highly efficient solar energy based on commercially proven technology Furthermore, PCT provides significant advantages including relevant guarantees and maintenance services.`,
    },
    {
      id: 8,
      title: "lightning controls",
      category: "Peofessional",
      img: "./images/item-13.jpg",
      desc: `A seamless integration of architectural dimming and switching and shade/drape control with our touch panels and keypads transforms any luxury home or Peofessional into the standard of lighting design and efficiency by which all others are measured.`,
    },
    {
      id: 9,
      title: "networking",
      category: "Peofessional",
      img: "./images/item-14.jpg",
      desc: `Structured cabling design and installation is gove med by a set of standards that specify wiring data centers, International  Services, and apartment Peofessionals for data or voice communications using various kinds of cable, most common category 5e (CAT 5e), category 6 (CAT-6). and fiber optic cabling and modular connectors.`,
    },
    {
      id: 10,
      title: "fire/alarm system",
      category: "Peofessional",
      img: "./images/item-15.jpg",
      desc: `Safety is of paramount importance whether there is a Fire or Burglary in vast built-up areas, to keep these hazards away PCT has the night solutions to safeguard from any eventuality For flexible architecture, PCT installs intelligent fire detection and fire alarm systems that support a broad range of Peofessionals, applications, and markets.`,
    },
    {
      id: 11,
      title: "board room solution",
      category: "International",
      img: "./images/item-6.jpg",
      desc: `Using SMART solutions, we give you opportunities by enabling you to work with information in more meaningful, effective ways. You can easily share information, concepts, and plans or discuss and brainstorm ideas either in scheduled meetings or informal collaboration sessions. You can also effortlessly capture notes by writing in digital ink over any application and saving your work as a PDF or PPT file. We enable video conference through Polycom Devices which allows multipoint audio/video calls.`,
    },
    {
      id: 12,
      title: "EPBAX solution",
      category: "International",
      img: "./images/item-7.jpg",
      desc: `We are proud to offer the highest level of telephony hardware platforms combined with powerful integrated software. We have been keeping innovating with customers' needs-oriented, working with partners to establish a total solution for SMB VoIP with IP phone, IP PBX, and Asterisk cars. We have partners nationwide that provide the solution for your business with full installation and cabling when required.`,
    },
    {
      id: 13,
      title: "structured cabling",
      category: "Community",
      img: "./images/item-8.jpg",
      desc: `We use color code patch panel cables to identify the type of connection. Each outlet is then patched into a network switch (normally also rack-mounted) for network use or into an IP or PBX (private branch exchange) telephone system patch panel. We design the network keeping in mind the redundancy factor. We create Gigabit Networking and are capable of configuring any kind of Managed Switches, VLAN Firewall devices & Routers.`,
    },
    {
      id: 14,
      title: "data center/SAN",
      category: "Community",
      img: "./images/item-9.jpg",
      desc: `PCT helps the customers to tackle IT infrastructures by simplifying operations through automating processes. PCT can help you design and deploy a data management solution through Storage Area Networks. We reduce the total cost of ownership (TCO) through standard-based solutions, simplified operations, virtualized storage, and seamless scalability We update & Suggest the latest technology advancements that simplify tasks & ease the administrative burdens.`,
    },
    {
      id: 15,
      title: "UPS/INVERTER",
      category: "Community",
      img: "./images/item-10.jpg",
      desc: `With an industry-leading knowledge of server management and hardware, we deliver UPS back-up and rack space configuration solutions using the latest APC technology, and stock a wide range of racks and accessories from rack-side cooling elements, software, cables, batteries, ,surge protectors and more`,
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
  
