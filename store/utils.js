export const state = () => ({
  sidebarIsOpen : false
})

export const mutations = {
  toggle(state){
    state.sidebarIsOpen = !state.sidebarIsOpen;
  }
}
