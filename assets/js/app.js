export default {
    data() {
        return {
            home: false,
      users: false
        }
      
      },

    setup() {
        const path = window.location.pathname;
        console.log(path);
        if (path.includes('index.html')) {
          return { home: true};
        } else if (path.includes('users.html')) {
          return {users: true};
        }
      },  
      methods : {  
            
      }  
    };

