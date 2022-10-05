

<template>
    
<main class="app">
    <section class="Start">
                        <h2 class="title">
                        Login Page
                        </h2>
                    </section>
                   
      <section class="create-todo">
                        
            
                        <form id="new-todo-form" @submit.prevent>
                            <h4>Account name</h4>
                            <input 
                                type="text" 
                                name="account" 
                                id="account" 
                                placeholder=""
                                v-model="account" />
                            <h4>password</h4>	
                            <input 
                                type="text" 
                                name="password" 
                                id="password" 
                                placeholder=""
                                v-model="password" />
                            
                                
                            
                              <router-link class="login" to="/main">Login</router-link>
                            
                        </form>
                        
                    </section>
                  </main>
</template>
<script>
//      methods: {
  //    gomain() {
    //    this.$router.push('/main')
      //}
    //}
  
  </script>

