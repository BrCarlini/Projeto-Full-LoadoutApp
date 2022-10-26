package br.com.brcarlini.androidloadoutapp

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.RecyclerView
import br.com.brcarlini.androidloadoutapp.adapter.ListaLoadoutAdapter
import br.com.brcarlini.androidloadoutapp.dao.LoadoutDao
import br.com.brcarlini.androidloadoutapp.databinding.FragmentWarzonellBinding
import br.com.brcarlini.androidloadoutapp.model.Loadout

class warzonellFragment() : Fragment() {

    private lateinit var binding: FragmentWarzonellBinding
    private val dao = LoadoutDao()
    //private val adapter = ListaLoadoutAdapter(, dao.exibeTodos())



    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentWarzonellBinding.inflate(layoutInflater, container, false)

        val buttonBack = binding.buttonBackWz2
        val fab = binding.floatingActionButtonWz2

        buttonBack.setOnClickListener {
            findNavController().navigate(R.id.action_warzonellFragment_to_homeFragment)
        }

        fab.setOnClickListener {
            findNavController().navigate(R.id.action_warzonellFragment_to_formWzllFragment)
        }



        return binding.root
    }

}