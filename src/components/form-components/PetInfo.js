import Confirmation from "./Confirmation";

function PetInfo() {
    return(
        <article class="header-article">
            <h1>First, tell us a little more about your pet.</h1>

            <div>
                <form>
                    <div>
                    <label for="pname" class="pet-label">Pet Name: </label> <input type="text" name="pname" minlength="2" maxlength="500" placeholder="Fido" required></input>
                    </div>

                    <div>
                    <label for="ptype" class="pet-label">Pet Type: </label> 
                        <select name="ptype" class="pet-input" required>
                                <option disabled selected value> -- Select Your Pet -- </option>
                                <option name="ptype" value="cat">Cat</option>
                                <option name="ptype" value="dog">Dog</option>
                                <option name="ptype" value="bird">Bird</option>
                                <option name="ptype" value="snake">Snake</option>
                                <option name="ptype" value="rodent">Rodent</option>
                                <option name="ptype" value="other">Other</option>
                            </select>
                    </div>

                    <div>
                    <label for="p-age" class="pet-label">Pet Age (Years): </label> <input id="p-age" type="number" name="p-age" placeholder="0" min="0" max="100" required></input>
                    </div>
                </form>
            </div>

            
        </article>
    );
}

export default PetInfo;