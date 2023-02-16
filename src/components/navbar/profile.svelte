<script lang="ts">
    // import profilePicture from "../../../images/navbar-user.jpg";
    // import profilePicture1 from "../../images/me.jpeg"
    // import profilePicture2 from "../../images/me2.png"

    let showProfileDropDown = false; 
    let profilePicture = "navbar-user.jpg";
    let emailList = [
        {
            title: "Aritra Mondal - University Email",
            email: "1806290@kiit.ac.in", 
            displayPicture: "navbar-user.jpg"
        },
        {
            title: "Aritra Mondal - Office Email",
            email: "aritra.mondal@lenaix.net", 
            displayPicture: "me.jpeg"
        },
        {
            title: "Aritra Mondal - ACM Official Email",
            email: "aritra@kiit.acm.org", 
            displayPicture: "me2.png"
        }
    ]

</script>
<button on:click={() => showProfileDropDown = !showProfileDropDown}>
    <img src="images/{profilePicture}" class="profile-picture" alt="User" />
</button>
{#if showProfileDropDown}
    <div class="z-50 fixed top-[70px] right-8 w-80 rounded-xl border border-slate-200 p-2 shadow-sm bg-white">
        <div class="flex flex-col items-center mb-4">
            <img src="/images/{profilePicture}" class="w-24 h-24 mb-3 mt-3 object-cover rounded-full" alt="User" />
            <div class="mb text-sm"> Aritra Mondal </div>
            <div class="border-slate-600 text-xs mb-3"> aritra041999@gmail.com </div>
            <button class="rounded-full px-4 pt-1.5 pb-1 border border-slate-300 text-slate-500 hover:bg-slate-100 text-xs font-semibold">
                Manage your account
            </button>
        </div>
        <div class="space-y-2">
            {#each emailList as email}
                <div class="flex items-center w-full py-2 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-700">
                    <img src="/images/{email.displayPicture}" class="w-7 h-7 object-cover rounded-full mr-4" alt="">
                    <div class="text-xs">
                        <div>{email.title}</div>
                        <div class="text-slate-500">{email.email}</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}