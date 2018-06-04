import "./stylsheets/main.scss";

(function () {

    
    /* accordion */

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function (accordion) {

        const accordionHead = accordion.querySelector(".accordion__head");
        const accordionContentHeight = accordion.querySelector(".accordion__content").offsetHeight;
        const accordionDrawer = accordion.querySelector(".accordion__drawer");

        if (accordion.classList.contains("open")) {
            accordionDrawer.style.maxHeight = `${accordionContentHeight}px`;
        }

        accordionHead.addEventListener("click", function () {
            if (accordion.classList.contains("open")) {
                accordion.classList.remove("open");
                accordionDrawer.style.maxHeight = `0px`;
            } else {
                accordion.classList.add("open");
                accordionDrawer.style.maxHeight = `${accordionContentHeight}px`;
            }
        })
    });


    /* lock */

    const lockableFieldsets = document.querySelectorAll(".fieldset-lockable");

    lockableFieldsets.forEach(function (lockableFieldset) {
        const lockTriggerCheckbox = lockableFieldset.querySelector(".fieldset-lock input");

        lockTriggerCheckbox.addEventListener("change", function () {
            lockableFieldset.classList.toggle("fieldset--lock")
        })
    });


    /* input unit */

    const inputsContWithUnit = document.querySelectorAll(".input-element--unit-back");

    inputsContWithUnit.forEach(function (cont) {
        const input = cont.querySelector("input");

        input.addEventListener("change", function (e) {
            cont.setAttribute("data-value", `${e.target.value}`)
        })
    });


    /* dropdown*/

    const dropdowns = document.querySelectorAll(".dropdown");
    const main = document.querySelector("main");
    const dropdownListWrapper = document.querySelector(".dropdown-wrapper");

    main.addEventListener("click", function () {
        if (dropdownListWrapper.classList.contains("show")) {
            dropdownListWrapper.classList.remove("show");
        }
    });

    dropdowns.forEach(function (dropdown) {
        const dropdownInput = dropdown.querySelector("input");
        const dropdownList = dropdown.querySelector(".dropdown__list");

        dropdown.addEventListener("click", function () {

            const dropdownPosTop = this.getBoundingClientRect().top;
            const dropdownPosLeft = this.getBoundingClientRect().left;

            const listClone = dropdownList.cloneNode(true);

            dropdownListWrapper.innerHTML = "";

            dropdownListWrapper.style.top = `${dropdownPosTop}px`;
            dropdownListWrapper.style.left = `${dropdownPosLeft}px`;

            dropdownListWrapper.appendChild(listClone);
            let itemsList = dropdownListWrapper.querySelectorAll(".dropdown__list-item");

            setTimeout(function () {
                dropdownListWrapper.classList.add("show");
            }, 10);

            itemsList.forEach(function (item) {
                item.addEventListener("click", function () {
                    const itemVal = this.getAttribute("data-value");
                    dropdownInput.setAttribute("value", `${itemVal}`);
                    dropdownListWrapper.classList.remove("show");
                })
            })
        });
    });


})();