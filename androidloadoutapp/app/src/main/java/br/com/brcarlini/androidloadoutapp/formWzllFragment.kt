package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import br.com.brcarlini.androidloadoutapp.databinding.FragmentFormWzllBinding


class formWzllFragment : Fragment() {

    private lateinit var binding: FragmentFormWzllBinding


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val binding = FragmentFormWzllBinding.inflate(layoutInflater, container, false)

        val buttonBack = binding.buttonBackFormWz2

        buttonBack.setOnClickListener {
            findNavController().navigate(R.id.action_formWzllFragment_to_warzonellFragment)
        }


        return binding.root
    }


}