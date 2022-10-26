package br.com.brcarlini.androidloadoutapp.dao

import br.com.brcarlini.androidloadoutapp.model.Loadout

class LoadoutDao {

    fun adicionar(loadout: Loadout){
        loadouts.add(loadout)
    }


    fun exibeTodos(): List<Loadout>{

        return loadouts.toList()
    }

    companion object{
        private val loadouts = mutableListOf<Loadout>()
    }


}