/**
 * @author Hazem Sabry 
 * @gmail hazemsabry2002@gmail.com
 * Class representing a Card.
 * @constructor
 */
class Card {
    root;
    body;
    pageFlexDirection;
    forgetPasswordBtnElement;
    inputs;
    selects;
    pageHeader;
    cardsContainer;
    cardContainers;
    backgroundColor;
    backgroundMovingImages;
    submitBtn;
    passwordInput;
    passwordSureInput;
    surePasswordInput;
    backBtnsCards;
    nextBtnsCards;
    firstCardGoBackBtnElement;
    OTPInputContainer;
    goToOTPPageBtnElement;
    togglePasswordVisibilityBtnElement;
    toggleSurePasswordVisibilityBtnElement;
    backgroundStudentImages;
    animationTime;
    numOfRows;
    backgroundImageDimension;
    numOfCols;
    animationDelayInMileSeconds;

    constructor() {
        this.root = document.documentElement;
        this.body = document.body;
        this.pageFlexDirection = getComputedStyle(this.body).getPropertyValue('--page-flex-direction');
        this.forgetPasswordBtnElement = document.getElementById("forget-password-btn");
        this.inputs = document.querySelectorAll("input");
        this.selects = document.querySelectorAll("select");
        this.pageHeader = document.getElementById("page-header");
        this.cardsContainer = document.getElementById(
            "cards-container"
        );
        this.cardContainers = document.querySelectorAll(
            ".card-container"
        );
        this.backgroundColor =
            getComputedStyle(this.root).getPropertyValue("--background-color");
        this.submitBtn = document.getElementById(
            "submit-btn"
        );
        this.passwordInput = document.getElementById("student-password");
        this.passwordSureInput = document.getElementById("student-sure-password");
        this.surePasswordInput = document.getElementById("student-sure-password");
        this.backBtnsCards = document.querySelectorAll("[back-btn]");
        this.nextBtnsCards = document.querySelectorAll("[next-btn]");
        this.firstCardGoBackBtnElement = document.getElementById("first-card-go-back-btn");
        this.OTPInputContainer = document.getElementById("OTP-input-container");
        this.goToOTPPageBtnElement = document.getElementById("go-to-OTP-page-btn");
        this.togglePasswordVisibilityBtnElement = document.getElementById("eye-icon-container-password");
        this.toggleSurePasswordVisibilityBtnElement = document.getElementById("eye-icon-container-sure-password");
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the forget password button.
     */
    forgetPasswordBtnAction() {
        this.forgetPasswordBtnElement.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "ForgetPasswordPage.html";
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Toggle the visibility of the password input field.
     * @param {HTMLButtonElement} togglePasswordVisibilityBtn - The HTMLButtonElement representing the toggle password visibility button.
     * @param {HTMLInputElement} passwordInput - The HTMLInputElement representing the password input field.
     */
    togglePasswordVisibility(togglePasswordVisibilityBtn, passwordInput) {

        togglePasswordVisibilityBtn.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordVisibilityBtn.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
            } else {
                passwordInput.type = "password";

                togglePasswordVisibilityBtn.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z"
                                            fill="#000000"></path>
                                    </g>
                                </svg>`;
            }
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Save the input value to session.
     */
    saveInputValueToSession() {
        this.inputs.forEach((input) => {
            input.addEventListener("blur", (e) => {
                sessionStorage.setItem(
                    `form input name=${e.target.name}`,
                    e.target.value
                );
            });
        });

        this.selects.forEach((select) => {
            select.addEventListener("blur", (e) => {
                sessionStorage.setItem(
                    `form select name=${e.target.name}`,
                    e.target.value
                );
            });
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Get the input value from session.
     */
    getInputValueFromSession() {
        this.inputs.forEach((input) => {
            input.value = sessionStorage.getItem(`form input name=${input.name}`);
        });

        this.selects.forEach((select) => {
            select.value = sessionStorage.getItem(`form select name=${select.name}`);
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the resizing of the create account or login screen.
     * It adjusts the layout and styling of the page elements based on the screen size.
     */
    screenResize() {
        // If the screen width is greater than the maximum mobile screen width,
        // perform specific actions for desktop view
        if (screen.width > MAX_MOBILE_SCREEN_WIDTH) {
            this.cardsContainer.style.zIndex = "99999";
            this.cardContainers.forEach(
                (cardContainer) => {
                    cardContainer.style.zIndex = "99999";
                }
            );

            // If the screen width is less than the maximum mobile screen width,
            // perform specific actions for mobile view
            if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
                this.pageHeader.style.display = "block";

                this.cardContainers.forEach(
                    (cardContainer) => {
                        const card = cardContainer.querySelector(".card");
                        card.style.boxShadow = "none";
                        cardContainer.style.backgroundColor =
                            this.backgroundColor;
                        cardContainer.style.alignItems = "flex-start";
                        cardContainer.style.paddingTop = "3rem";
                    }
                );
            }
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
    * Method to handle the click event of the create account or login submit button.
    * It validates the input fields, scrolls to the next card if any field is invalid,
    * and prevents the form submission if any required field is empty or invalid.
    * It also checks if the password and sure password fields match.
    *
    * @returns {void}
    */
    btnCardSubmitForm() {
        this.submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            for (let i = 0; i < this.cardContainers.length; i++) {
                const inputs =
                    this.cardContainers[i].querySelectorAll("[form-input]");
                for (let j = 0; j < inputs.length; j++) {
                    if (
                        inputs[j].value.trim() === "" ||
                        (inputs[j].getAttribute("type") === "gmail" &&
                            !inputs[j].value.includes("@"))
                    ) {
                        inputs[j].style.boxShadow = `0 2px 0 0  ${errorColor}`;
                        let scrollLength =
                            this.cardContainers[i].offsetWidth *
                            (this.cardContainers.length - 1 - i);
                        scrollLength = (this.pageFlexDirection === "row") ? -scrollLength : scrollLength;
                        this.cardsContainer.scrollBy({
                            top: 0,
                            left: scrollLength,
                            behavior: "smooth",
                        });
                        return;
                    } else if (inputs[j].type === "checkbox" && !inputs[j].checked) {
                        inputs[
                            j
                        ].style.boxShadow = `${errorColor} 0px 1px 4px, ${errorColor} 0px 0px 0px 3px`;
                    } else if (!(inputs[j].type === "checkbox")) {
                        inputs[j].style.boxShadow = `0 1px 0 0  #000`;
                        inputs[j].addEventListener("focus", () => {
                            inputs[j].style.boxShadow = `0 2px 0 0  ${btnColor}`;
                        });
                        inputs[j].addEventListener("focus", () => {
                            inputs[j].style.boxShadow = `0 2px 0 0  ${btnColor}`;
                        });
                        inputs[j].addEventListener("blur", () => {
                            inputs[j].style.boxShadow = `0 1px 0 0  #000`;
                        });
                    } else {
                        inputs[j].style.boxShadow = `0 0 0 0  #fff`;
                    }
                }
            }

            if (this.body.contains(this.surePasswordInput)) {
                if (this.passwordInput.value !== this.surePasswordInput.value) {
                    this.surePasswordInput.style.boxShadow = `0 2px 0 0  ${errorColor}`;
                }
            }
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the back button.
     */
    backBtnCardAction() {
        this.backBtnsCards.forEach((backBtnCard) => {
            backBtnCard.addEventListener("click", (e) => {
                e.preventDefault();
                let scrollLength = this.cardContainers[0].offsetWidth;
                scrollLength = (this.pageFlexDirection === "row") ? -scrollLength : scrollLength;

                this.cardsContainer.scrollBy({
                    top: 0,
                    left: scrollLength,
                    behavior: "smooth",
                });
            });
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the next button.
     */
    nextBtnCardAction() {
        this.nextBtnsCards.forEach((nextBtnCard) => {
            nextBtnCard.addEventListener("click", (e) => {
                e.preventDefault();
                let scrollLength = this.cardContainers[0].offsetWidth;
                scrollLength = (this.pageFlexDirection === "row") ? scrollLength : -scrollLength;
                this.cardsContainer.scrollBy({
                    top: 0,
                    left: scrollLength,
                    behavior: "smooth",
                });
            });
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the first card go back button.
     */
    firstCardGoBackBtnAction() {
        this.firstCardGoBackBtnElement.addEventListener("click", () => {
            window.history.back();
        });
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to create and manage the background moving images on the create account or login page.
     * This method creates a div element with class "background-moving-images" and populates it with
     * multiple rows of images. Each row contains multiple images that move from left to right.
     * The images are randomly selected from a predefined array of background student images.
     * The animation speed, number of rows and columns, and other related properties are calculated dynamically.
     * The method also handles the infinite scrolling effect by removing the first image from each row and
     * appending it to the end of the row.
     */
    createBackgroundMovingImages() {
        this.body.style.maxHeight = "100vh";
        this.body.style.overflow = "hidden";

        this.root.style.setProperty(
            "--background-image-dimension",
            `${this.backgroundImageDimension}px`
        );
        this.root.style.setProperty("--number-of-background-images-per-row", this.numOfCols);

        this.backgroundMovingImages = document.createElement("div");
        this.backgroundMovingImages.classList.add("background-moving-images");

        for (let i = 0; i < this.numOfRows; i++) {
            const row = document.createElement("div");
            row.classList.add("background-moving-images-row");
            let rndIndex;

            for (let j = 0; j < this.numOfCols; j++) {
                let rndImg;
                do {
                    rndImg = Math.round(
                        Math.random() * (this.backgroundStudentImages.length - 1)
                    );
                } while (rndIndex == rndImg);
                rndIndex = rndImg;
                const image = document.createElement("img");
                image.src = this.backgroundStudentImages[rndIndex];
                image.alt = "background student image";
                image.classList.add("background-image");
                image.style.left = `${j * this.backgroundImageDimension}px`;
                image.style.pointerEvents = "none";
                image.style.animation = `backgroundImageScrollLeft ${this.animationTime}s linear infinite`;
                image.setAttribute("background-moving-image", "");
                row.appendChild(image);
            }
            this.backgroundMovingImages.appendChild(row);
        }

        this.body.appendChild(this.backgroundMovingImages);

        const rows = document.querySelectorAll(".background-moving-images-row");
        const numOfCols = this.numOfCols;
        const backgroundImageDimension = this.backgroundImageDimension;
        const infiniteScrollToLeftInterval = setInterval(function () {
            rows.forEach((row) => {
                const firstChild = row.firstElementChild;
                row.removeChild(firstChild);
                row.appendChild(firstChild);
                firstChild.style.left = `${(numOfCols - 1) * backgroundImageDimension}px`;
            });
        }, this.animationDelayInMileSeconds);
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the auto change input on press event for OTP input.
     * It listens to paste, input, and keydown events on the OTP input fields.
     * When a paste event occurs, it sanitizes the clipboard data, removes spaces and hyphens,
     * and populates the input fields accordingly.
     * When an input event occurs, it focuses the next input field if the current input field is filled.
     * When a keydown event occurs with the "Backspace" key, it focuses the previous input field if the current input field is empty.
     */
    OTPAutoChangeInputOnPress() {

        if (this.body.contains(this.OTPInputContainer)) {
            const elsInput = [...this.OTPInputContainer.children];
            const len = elsInput.length;

            const handlePaste = (ev) => {
                const clip = ev.clipboardData.getData('text');     // Get clipboard data
                const pin = clip.replace(/\s|-/g, "");             // Sanitize string
                const ch = [...pin];                               // Create array of chars
                elsInput.forEach((el, i) => el.value = ch[i] ?? ""); // Populate inputs
                elsInput[Math.min(len, pin.length) - 1]?.focus();  // Focus input
            };

            const handleInput = (ev) => {
                const elInp = ev.currentTarget;
                const i = elsInput.indexOf(elInp);
                if (elInp.value && (i + 1) % len) elsInput[i + 1]?.focus();  // focus next
            };

            const handleKeyDn = (ev) => {
                const elInp = ev.currentTarget
                const i = elsInput.indexOf(elInp);
                if (!elInp.value && ev.key === "Backspace" && i) elsInput[i - 1]?.focus(); // Focus previous
            };

            elsInput.forEach(elInp => {
                elInp.addEventListener("paste", handlePaste);   // Handle pasting
                elInp.addEventListener("input", handleInput);   // Handle typing
                elInp.addEventListener("keydown", handleKeyDn); // Handle deleting
            });
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the go to OTP page button.
     * Navigates to the OTPPage.html when the button is clicked.
     */
    goToOTPPageBtn() {
        // Check if the button exists in the body
        if (this.body.contains(this.goToOTPPageBtnElement)) {
            // Add a click event listener to the button
            this.goToOTPPageBtnElement.addEventListener("click", () => {
                // Navigate to the OTPPage.html when the button is clicked
                window.location.href = "OTPPage.html";
            })
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the go back button on the first card.
     */
    forgetPasswordBtn() {
        if (this.body.contains(this.forgetPasswordBtnElement)) {
            this.forgetPasswordBtnAction();
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the go back button on the first card.
     */
    firstCardGoBackBtn() {
        if (this.body.contains(this.firstCardGoBackBtnElement)) {
            this.firstCardGoBackBtnAction();
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the next button.
     */
    nextBtnCard() {
        if (this.nextBtnsCards.length > 0) {
            this.nextBtnCardAction();
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Method to handle the click event of the next button.
     */
    backBtnCard() {
        if (this.backBtnsCards.length > 0) {
            this.backBtnCardAction();
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Toggle the visibility of the password input field.
     */
    togglePasswordVisibilityBtn() {
        if (this.body.contains(this.togglePasswordVisibilityBtnElement)) {
            this.togglePasswordVisibility(this.togglePasswordVisibilityBtnElement, this.passwordInput);
        }
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Toggle the visibility of the password input field.
     */
    toggleSurePasswordVisibilityBtn() {
        if (this.body.contains(this.toggleSurePasswordVisibilityBtnElement)) {
            this.togglePasswordVisibility(this.toggleSurePasswordVisibilityBtnElement, this.passwordSureInput);
        }
    }

}

const informationCard = new Card();

informationCard.screenResize();
informationCard.firstCardGoBackBtn();
informationCard.nextBtnCard();
informationCard.backBtnCard();
informationCard.btnCardSubmitForm();
informationCard.saveInputValueToSession();
informationCard.getInputValueFromSession();
informationCard.togglePasswordVisibilityBtn();
informationCard.toggleSurePasswordVisibilityBtn();
informationCard.forgetPasswordBtn();
informationCard.goToOTPPageBtn();
informationCard.OTPAutoChangeInputOnPress();
mobileGoBackBtnAction();