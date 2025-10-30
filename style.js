const head = document.getElementById('head');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 0&&head) {
          head.style.position = 'fixed';
          head.style.top = '0';
          head.style.width = '100%';
        }
      });
      const register=document.getElementById('register');
        window.openModal = function(){
        if (!register) return;
        register.classList.remove('hidden');
        register.classList.add('flex');
      };
      window.closeModal = function(){
        if (!register) return;
        register.classList.add('hidden');
        register.classList.remove('flex');
      };
    
    const btnr=document.getElementById("btnr");
    const footer=document.getElementById("footer");
    btnr.onclick=function(){
      btnr.innerText="successfuly";
      btnr
    }