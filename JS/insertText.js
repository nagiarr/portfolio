document.addEventListener('DOMContentLoaded', () => {

    fetch('./data/profile.json')
      .then(response => response.json())
      .then(data => {
        const name = document.getElementById('name');
        name.textContent = data.profile_data.name + "(" + data.profile_data.yomi + ")";
        
        const date_of_birth = document.getElementById('date_of_birth');
        date_of_birth.textContent = data.profile_data.date_of_birth;

        const address = document.getElementById('address');
        address.textContent = data.profile_data.address;

        const site_of_bith = document.getElementById('site_of_birth');
        site_of_bith.textContent = data.profile_data.site_of_birth;

        const refresh = document.getElementById('refresh');
        refresh.textContent = data.profile_data.refresh;

      })
    .catch(error => {
      console.error('Error:', error);
    });

});