package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.fragment.findNavController
import br.com.brcarlini.androidloadoutapp.databinding.FragmentHomeBinding


class HomeFragment : Fragment() {

    private lateinit var binding: FragmentHomeBinding


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentHomeBinding.inflate(layoutInflater, container, false)


        // Botões da página Home
        val buttonWzll = binding.buttonWz2Home
        val buttonMwll = binding.buttonMw2Home
        val buttonWz = binding.buttonWzHome
        val buttonSort = binding.buttonSlHome


        buttonWzll.setOnClickListener {
            findNavController().navigate(R.id.action_homeFragment_to_warzonellFragment)
        }


        buttonMwll.setOnClickListener {
            findNavController().navigate(R.id.action_homeFragment_to_mwllFragment)
        }


        buttonWz.setOnClickListener {
            findNavController().navigate(R.id.action_homeFragment_to_warzoneFragment)
        }


        buttonSort.setOnClickListener{
            findNavController().navigate(R.id.action_homeFragment_to_loadAleatFragment)
        }

        return binding.root
    }
}