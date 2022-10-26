package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import br.com.brcarlini.androidloadoutapp.databinding.FragmentMwllBinding

class mwllFragment : Fragment() {

    private lateinit var binding: FragmentMwllBinding


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentMwllBinding.inflate(layoutInflater, container, false)

        val buttonBack = binding.buttonBackMwll

        buttonBack.setOnClickListener {
            findNavController().navigate(R.id.action_mwllFragment_to_homeFragment)
        }

        return binding.root
    }


}