package br.com.brcarlini.androidloadoutapp.adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import br.com.brcarlini.androidloadoutapp.R
import br.com.brcarlini.androidloadoutapp.databinding.FragmentWarzonellBinding
import br.com.brcarlini.androidloadoutapp.model.Loadout
import br.com.brcarlini.androidloadoutapp.warzonellFragment

class ListaLoadoutAdapter(
    private val context: Context,
    loadout: List<Loadout>
): RecyclerView.Adapter<ListaLoadoutAdapter.ViewHolder>() {

    private var loadouts = loadout.toMutableList()

    class ViewHolder(view: View): RecyclerView.ViewHolder(view){

        fun vincula(loadout: Loadout){
            val nome = itemView.findViewById<TextView>(R.id.text_nomeArma_wz2)
            nome.text = loadout.nome

            val boca = itemView.findViewById<TextView>(R.id.text_bocaArma_wz2)
            boca.text = loadout.boca

            val cano = itemView.findViewById<TextView>(R.id.text_canoArma_wz2)
            cano.text = loadout.cano

            val laser = itemView.findViewById<TextView>(R.id.text_laserArma_wz2)
            laser.text = loadout.laser

            val lente = itemView.findViewById<TextView>(R.id.text_lenteArma_wz2)
            lente.text = loadout.lente

            val coronha = itemView.findViewById<TextView>(R.id.text_coronhaArma_wz2)
            coronha.text = loadout.coronha

            val acoplamento = itemView.findViewById<TextView>(R.id.text_acoplamentoArma_wz2)
            acoplamento.text = loadout.acoplamento

            val municao = itemView.findViewById<TextView>(R.id.text_municaoArma_wz2)
            municao.text = loadout.municao

            val carregador = itemView.findViewById<TextView>(R.id.text_carregadorArma_wz2)
            carregador.text = loadout.carregador

            val cabo = itemView.findViewById<TextView>(R.id.text_caboArma_wz2)
            cabo.text = loadout.cabo
        }
    }



    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val inflater = LayoutInflater.from(context)
        val view = inflater.inflate(R.layout.card_loadout_warzonell, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val loadout = loadouts[position]
        holder.vincula(loadout)
    }

    override fun getItemCount(): Int {
        return loadouts.size
    }


    fun atualiza(loadouts: List<Loadout>){
        this.loadouts.clear()
        this.loadouts.addAll(loadouts)
        notifyDataSetChanged()
    }


}