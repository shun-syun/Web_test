(()=>{
    const $tab = document.getElementById("js-tab-nav");
    const $tabNav = $tab.querySelectorAll("[data-nav]");
    const $tabContent = $tab.querySelectorAll("[data-content]");

    // 初期化
    const init = () => {
        $tabContent[0].style.display = 'block';
    };
    init();

    const clickEve = (e) => {
        e.preventDefault();
        const $this = e.target;
        const thisVal = $this.dataset.nav;

        let index = 0;
        while (index < $tabContent.length) {
            if (index == thisVal){
                $tabContent[index].style.display = 'block';
                $tabNav[index].classList.add("is-active");

            }else{
                $tabContent[index].style.display = 'none';
                $tabNav[index].classList.remove("is-active");
            }
            index ++;
        }
    };

    let count = 0;
    while (count < $tabNav.length) {
        $tabNav[count].addEventListener('click', (e) => {
            clickEve(e);
        });
        count ++;
    }
})();