// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
        console.log('Success!', data);
        const tabs = document.querySelector('.tabs');
        tabs.appendChild(createTab(data.data));

    })
    .catch(err => {
        console.log('Error: ', err);
    })

function createTab(data) {

    const tabContainer = document.querySelector('.topics');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const tab4 = document.createElement('div');
    const tab5 = document.createElement('div');

    tabContainer.classList.add('topics');
    tab1.classList.add('tab');
    tab2.classList.add('tab');
    tab3.classList.add('tab');
    tab4.classList.add('tab');
    tab5.classList.add('tab');


    tabContainer.appendChild(tab1);
    tabContainer.appendChild(tab2);
    tabContainer.appendChild(tab3);
    tabContainer.appendChild(tab4);
    tabContainer.appendChild(tab5);


    tab1.textContent = data.topics[0];
    tab2.textContent = data.topics[1];
    tab3.textContent = data.topics[2];
    tab4.textContent = data.topics[3];
    tab5.textContent = data.topics[4];


    let nodeTabs = document.querySelectorAll('div.tab');
    let allTabs = Array.prototype.slice.call(nodeTabs);

    console.log(allTabs)

    allTabs.forEach((item) => {
        item.addEventListener('click', (tab) => {
            removeClass()
            tab.target.classList.add('active-tab')
        })
    })

    function removeClass() {
        allTabs.forEach(item => item.classList.remove('active-tab'))
    }


    return tabContainer;

}