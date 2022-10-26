package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import br.com.brcarlini.androidloadoutapp.databinding.FragmentWarzoneBinding


class warzoneFragment : Fragment() {

    private lateinit var binding: FragmentWarzoneBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentWarzoneBinding.inflate(layoutInflater, container, false)

        val buttonBack = binding.buttonBackWz

        buttonBack.setOnClickListener {
            findNavController().navigate(R.id.action_warzoneFragment_to_homeFragment)
        }

        return binding.root
    }

}