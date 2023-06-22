#VueJS : Formulaires


## Utiliser un formulaire avec Vue

index.html
```html
<section id="app">  
    <h2>Notes</h2>  
    <ul>        
	    <li v-for="grade in grades">  
            {{ grade }}  
        </li>  
    </ul>    
    <form @submit.prevent="addGrade">  
        <fieldset>            
	        <label for="grade">Saisir la note</label>  
            <input type="text" name="grade" id="grade" />  
        </fieldset>        
        <button type="submit">Ajouter</button>  
    </form>
</section>
```

L'attribut `@submit.prevent` nous permet d'attacher la méthode `addGrade` à l'évenement de submit et en même temps de faire l'équivalent d'un `event.preventDefault` pour empêcher le rechargement de la page.

app.js
```js
export default {  
    data() {  
        return {  
            grades : [  
  
            ]  
        }  
    },  
    methods : {  
        addGrade (event) {  
            let value = event.target.elements.grade.value;  
            this.grades.push(value);  
        }  
    }  
}
```

`event.target.elements.grade.value` nous permet de récupérer la valeur de l'élément (l'input) du formulaire qui a  `name="grade"`.